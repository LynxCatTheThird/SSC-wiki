import {useCallback, useEffect, useRef, useState} from 'react';
import type {
  AppearanceSettings,
  CameraChangeSource,
  CameraSnapshot,
  ModelViewerElement,
  StageDefinition,
} from './types';
import {DEFAULT_VIEW} from './types';

type BridgeCallbacks = {
  onCameraChange: (generation: number, camera: CameraSnapshot, source: CameraChangeSource) => void;
  onLoad: (
    generation: number,
    camera: CameraSnapshot,
    animations: string[],
    animation: string | null,
    playing: boolean,
  ) => void;
  onError: (generation: number) => void;
};

type ActiveLoad = {
  generation: number;
  src: string;
  stage: StageDefinition;
};

let registrationPromise: Promise<void> | null = null;

export function ensureModelViewerDefined(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (!registrationPromise) {
    registrationPromise = import('@google/model-viewer').then(async () => {
      await window.customElements.whenDefined('model-viewer');
    });
  }
  return registrationPromise;
}

function readCamera(viewer: ModelViewerElement): CameraSnapshot | null {
  const orbit = viewer.getCameraOrbit?.();
  const target = viewer.getCameraTarget?.();
  const fieldOfView = viewer.getFieldOfView?.();
  if (!orbit || !target || fieldOfView == null || orbit.radius <= 0) return null;

  const degrees = (radians: number) => radians * 180 / Math.PI;
  const normalize = (value: number) => ((value + 180) % 360 + 360) % 360 - 180;
  return {
    orbitX: normalize(degrees(orbit.theta)),
    orbitY: degrees(orbit.phi),
    distance: orbit.radius,
    targetX: target.x,
    targetY: target.y,
    targetZ: target.z,
    fieldOfView,
  };
}

function setViewPreset(viewer: ModelViewerElement, stage: StageDefinition) {
  const preset = {...DEFAULT_VIEW, ...stage.view};
  viewer.cameraOrbit = preset.cameraOrbit;
  viewer.cameraTarget = preset.cameraTarget;
  viewer.fieldOfView = preset.fieldOfView;
}

function setAnimation(viewer: ModelViewerElement, animation: string | null, playing: boolean) {
  viewer.pause?.();
  viewer.currentTime = 0;
  viewer.animationName = animation ?? undefined;
  viewer.currentTime = 0;
  if (animation && playing) viewer.play?.({repetitions: Infinity, pingpong: false});
}

function sameLoad(current: ActiveLoad | null, expected: ActiveLoad, viewer: ModelViewerElement) {
  if (current !== expected) return false;
  if (!viewer.src) return true;
  return new URL(viewer.src, document.baseURI).href === new URL(expected.src, document.baseURI).href;
}

export function useModelViewerBridge(callbacks: BridgeCallbacks) {
  const [element, setElement] = useState<ModelViewerElement | null>(null);
  const callbacksRef = useRef(callbacks);
  const activeLoadRef = useRef<ActiveLoad | null>(null);
  const cameraFrameRef = useRef<number | null>(null);
  callbacksRef.current = callbacks;

  const bindElement = useCallback((node: ModelViewerElement | null) => setElement(node), []);

  useEffect(() => {
    if (!element) return;

    const onCameraChange = (event: Event) => {
      if (cameraFrameRef.current != null) return;
      const source = (event as CustomEvent<{source?: CameraChangeSource}>).detail?.source ?? 'none';
      cameraFrameRef.current = window.requestAnimationFrame(() => {
        cameraFrameRef.current = null;
        const activeLoad = activeLoadRef.current;
        const camera = readCamera(element);
        if (activeLoad && camera) {
          callbacksRef.current.onCameraChange(activeLoad.generation, camera, source);
        }
      });
    };

    const onLoad = async () => {
      const activeLoad = activeLoadRef.current;
      if (!activeLoad || !sameLoad(activeLoadRef.current, activeLoad, element)) return;

      await element.updateFraming?.();
      if (!sameLoad(activeLoadRef.current, activeLoad, element)) return;

      setViewPreset(element, activeLoad.stage);
      element.resetTurntableRotation?.(0);
      await element.updateComplete;
      element.jumpCameraToGoal?.();
      await new Promise<void>((resolve) => window.requestAnimationFrame(() => resolve()));
      if (!sameLoad(activeLoadRef.current, activeLoad, element)) return;

      const camera = readCamera(element);
      if (!camera) {
        callbacksRef.current.onError(activeLoad.generation);
        return;
      }

      element.minCameraOrbit = `auto auto ${camera.distance * 0.35}m`;
      element.maxCameraOrbit = `auto auto ${camera.distance * 3}m`;
      const animations = [...(element.availableAnimations ?? [])];
      const animation = activeLoad.stage.defaultAnimation && animations.includes(activeLoad.stage.defaultAnimation)
        ? activeLoad.stage.defaultAnimation
        : null;
      const playing = animation != null;
      setAnimation(element, animation, playing);
      callbacksRef.current.onLoad(activeLoad.generation, camera, animations, animation, playing);
    };

    const onError = () => {
      const activeLoad = activeLoadRef.current;
      if (activeLoad) callbacksRef.current.onError(activeLoad.generation);
    };

    element.addEventListener('camera-change', onCameraChange);
    element.addEventListener('load', onLoad);
    element.addEventListener('error', onError);
    return () => {
      if (cameraFrameRef.current != null) window.cancelAnimationFrame(cameraFrameRef.current);
      cameraFrameRef.current = null;
      element.removeEventListener('camera-change', onCameraChange);
      element.removeEventListener('load', onLoad);
      element.removeEventListener('error', onError);
    };
  }, [element]);

  const loadStage = useCallback(async (stage: StageDefinition, generation: number) => {
    if (!element) return;
    const load: ActiveLoad = {generation, src: stage.model, stage};
    activeLoadRef.current = load;
    element.autoRotate = false;
    setAnimation(element, null, false);
    element.minCameraOrbit = 'auto';
    element.maxCameraOrbit = 'auto';
    setViewPreset(element, stage);
    element.resetTurntableRotation?.(0);
    await element.updateComplete;
    if (activeLoadRef.current !== load) return;
    element.src = stage.model;
  }, [element]);

  const updateCamera = useCallback((camera: CameraSnapshot) => {
    if (!element) return;
    element.cameraOrbit = `${camera.orbitX}deg ${camera.orbitY}deg ${camera.distance}m`;
    element.cameraTarget = `${camera.targetX}m ${camera.targetY}m ${camera.targetZ}m`;
    element.fieldOfView = `${camera.fieldOfView}deg`;
  }, [element]);

  const resetCamera = useCallback(async (camera: CameraSnapshot) => {
    if (!element) return;
    updateCamera(camera);
    element.resetTurntableRotation?.(0);
    await element.updateComplete;
    element.jumpCameraToGoal?.();
  }, [element, updateCamera]);

  const updateAppearance = useCallback((appearance: AppearanceSettings) => {
    if (!element) return;
    element.exposure = appearance.exposure;
    element.shadowIntensity = appearance.shadowIntensity;
    element.shadowSoftness = appearance.shadowSoftness;
    element.rotationPerSecond = `${appearance.rotationSpeed}deg`;
  }, [element]);

  const updateAutoRotate = useCallback((autoRotate: boolean) => {
    if (!element) return;
    element.autoRotate = autoRotate;
    element.autoRotateDelay = 800;
  }, [element]);

  const selectAnimation = useCallback((animation: string | null, playing: boolean) => {
    if (element) setAnimation(element, animation, playing);
  }, [element]);

  const updatePlayback = useCallback((playing: boolean) => {
    if (!element) return;
    if (playing) element.play?.({repetitions: Infinity, pingpong: false});
    else element.pause?.();
  }, [element]);

  return {
    bindElement,
    element,
    loadStage,
    resetCamera,
    selectAnimation,
    updateAppearance,
    updateAutoRotate,
    updateCamera,
    updatePlayback,
  };
}
