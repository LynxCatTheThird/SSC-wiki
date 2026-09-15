import React, {useEffect, useId, useRef, useState} from 'react';

type Viewer = HTMLElement & {
  animationName?: string;
  availableAnimations?: string[];
  currentTime?: number;
  cameraOrbit?: string;
  cameraTarget?: string;
  fieldOfView?: string;
  exposure?: number;
  shadowIntensity?: number;
  shadowSoftness?: number;
  autoRotate?: boolean;
  autoRotateDelay?: number;
  rotationPerSecond?: string;
  readonly turntableRotation?: number;
  getCameraOrbit?: () => {theta: number; phi: number; radius: number};
  getCameraTarget?: () => {x: number; y: number; z: number};
  getFieldOfView?: () => number;
  jumpCameraToGoal?: () => void;
  pause?: () => void;
  play?: (options?: {repetitions: number; pingpong: boolean}) => void;
  resetTurntableRotation?: () => void;
};

type Option = {value: string; label: string};
type Stage = {label: string; title: string; model: string; poster?: string};

export type FormModelViewerProps = {
  model?: string;
  poster?: string;
  title?: string;
  stages?: Record<string, Stage>;
  animations?: Record<string, string>;
};

const DEFAULTS = {
  orbitX: 180,
  orbitY: 75,
  distance: 0,
  targetX: 0,
  targetY: 0.9,
  targetZ: 0,
  fieldOfView: 30,
  shadowIntensity: 0.55,
  shadowSoftness: 0.85,
  exposure: 1,
  rotationSpeed: 24,
};

const DISTANCE_MIN = 4;
const DISTANCE_MAX = 10;
const clampControlDistance = (distance: number) => Math.min(DISTANCE_MAX, Math.max(DISTANCE_MIN, distance));

function SelectControl({label, value, options, disabled, onChange}: {
  label: string;
  value: string;
  options: Option[];
  disabled?: boolean;
  onChange: (value: string) => void;
}) {
  const id = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const selected = options.find((option) => option.value === value) ?? options[0];

  useEffect(() => {
    const close = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, []);

  return <div className="form-model-viewer__field" ref={rootRef}>
    <span id={`${id}-label`}>{label}</span>
    <button
      type="button"
      className="form-model-viewer__select"
      aria-labelledby={`${id}-label ${id}-value`}
      aria-haspopup="listbox"
      aria-expanded={open}
      disabled={disabled}
      onClick={() => setOpen(!open)}
      onKeyDown={(event) => { if (event.key === 'Escape') setOpen(false); }}
    >
      <span id={`${id}-value`}>{selected?.label ?? '不可用'}</span><span className="form-model-viewer__chevron" aria-hidden="true" />
    </button>
    {open && <div className="form-model-viewer__menu" role="listbox" aria-labelledby={`${id}-label`}>
      {options.map((option) => <button
        type="button"
        role="option"
        aria-selected={option.value === value}
        key={option.value}
        onClick={() => { onChange(option.value); setOpen(false); }}
      >{option.label}</button>)}
    </div>}
  </div>;
}

export default function FormModelViewer({model, poster, title = '3D 模型', stages, animations = {}}: FormModelViewerProps) {
  const viewerRef = useRef<Viewer>(null);
  const stageKeys = Object.keys(stages ?? {});
  const [stage, setStage] = useState(stageKeys[0] ?? '');
  const activeStage = stages?.[stage];
  const activeModel = activeStage?.model ?? model ?? '';
  const activeTitle = activeStage?.title ?? title;
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [available, setAvailable] = useState<string[]>([]);
  const [selected, setSelected] = useState('__static__');
  const [playing, setPlaying] = useState(false);
  const [staticRevision, setStaticRevision] = useState(0);
  const [autoRotate, setAutoRotate] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settings, setSettings] = useState(DEFAULTS);
  const initialDistance = useRef(0);
  const lastCameraSync = useRef(0);

  useEffect(() => {
    void import('@google/model-viewer').then(() => setReady(true)).catch(() => setFailed(true));
  }, []);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    initialDistance.current = 0;
    const onError = () => setFailed(true);
    const syncCamera = (force = false) => {
      const now = performance.now();
      if (!force && now - lastCameraSync.current < 80) return;
      lastCameraSync.current = now;
      const orbit = viewer.getCameraOrbit?.();
      const target = viewer.getCameraTarget?.();
      const fov = viewer.getFieldOfView?.();
      if (!orbit) return;
      if (initialDistance.current <= 0 && orbit.radius > 0) initialDistance.current = orbit.radius;
      const toDegrees = (radians: number) => radians * 180 / Math.PI;
      const normalizeDegrees = (degrees: number) => ((degrees + 180) % 360 + 360) % 360 - 180;
      const visualTheta = toDegrees(orbit.theta) - toDegrees(viewer.turntableRotation ?? 0);
      setSettings((current) => ({
        ...current,
        orbitX: Math.round(normalizeDegrees(visualTheta)),
        orbitY: Math.round(toDegrees(orbit.phi)),
        distance: orbit.radius > 0 ? orbit.radius : current.distance,
        targetX: target?.x ?? current.targetX,
        targetY: target?.y ?? current.targetY,
        targetZ: target?.z ?? current.targetZ,
        fieldOfView: fov ?? current.fieldOfView,
      }));
    };
    const onLoad = () => {
      setAvailable([...(viewer.availableAnimations ?? [])]);
      setSelected('__static__');
      setPlaying(false);
      const orbit = viewer.getCameraOrbit?.();
      if (orbit && orbit.radius > 0) initialDistance.current = orbit.radius;
      syncCamera(true);
    };
    const onCameraChange = () => syncCamera();
    viewer.addEventListener('error', onError);
    viewer.addEventListener('load', onLoad);
    viewer.addEventListener('camera-change', onCameraChange);
    setFailed(false);
    setAvailable([]);
    // The model-viewer element can finish loading before React attaches the
    // listener. Read the resolved orbit immediately and retry after layout.
    syncCamera(true);
    const frame = window.requestAnimationFrame(() => syncCamera(true));
    const retry = window.setTimeout(() => syncCamera(true), 150);
    const retryLate = window.setTimeout(() => syncCamera(true), 800);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(retry);
      window.clearTimeout(retryLate);
      viewer.removeEventListener('error', onError);
      viewer.removeEventListener('load', onLoad);
      viewer.removeEventListener('camera-change', onCameraChange);
    };
  }, [activeModel, ready]);

  useEffect(() => {
    if (!autoRotate) return;
    const timer = window.setInterval(() => {
      const viewer = viewerRef.current;
      const orbit = viewer?.getCameraOrbit?.();
      if (!viewer || !orbit) return;
      const degrees = (orbit.theta - (viewer.turntableRotation ?? 0)) * 180 / Math.PI;
      const normalized = ((degrees + 180) % 360 + 360) % 360 - 180;
      setSettings((current) => ({...current, orbitX: Math.round(normalized)}));
    }, 100);
    return () => window.clearInterval(timer);
  }, [autoRotate]);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    if (selected === '__static__') {
      viewer.pause?.();
      return;
    }
    viewer.animationName = selected;
    if (playing) viewer.play?.({repetitions: Infinity, pingpong: false}); else viewer.pause?.();
  }, [selected, playing, available]);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    viewer.exposure = settings.exposure;
    viewer.shadowIntensity = settings.shadowIntensity;
    viewer.shadowSoftness = settings.shadowSoftness;
    viewer.rotationPerSecond = `${settings.rotationSpeed}deg`;
  }, [settings.exposure, settings.shadowIntensity, settings.shadowSoftness, settings.rotationSpeed, ready, activeModel]);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    viewer.autoRotate = autoRotate;
    viewer.autoRotateDelay = 800;
  }, [autoRotate, ready, activeModel]);

  const updateCamera = (key: 'orbitX' | 'orbitY' | 'distance' | 'targetX' | 'targetY' | 'targetZ' | 'fieldOfView', value: number) => {
    const viewer = viewerRef.current;
    const currentRadius = viewer?.getCameraOrbit?.()?.radius ?? 0;
    const calculatedDistance = settings.distance > 0 ? settings.distance : currentRadius > 0 ? currentRadius : initialDistance.current;
    const distance = clampControlDistance(calculatedDistance);
    const next = {...settings, distance, [key]: key === 'distance' ? clampControlDistance(value) : value};
    setSettings(next);
    if (!viewer) return;
    const turntableDegrees = (viewer.turntableRotation ?? 0) * 180 / Math.PI;
    viewer.cameraOrbit = `${next.orbitX + turntableDegrees}deg ${next.orbitY}deg ${next.distance}m`;
    viewer.cameraTarget = `${next.targetX}m ${next.targetY}m ${next.targetZ}m`;
    viewer.fieldOfView = `${next.fieldOfView}deg`;
    viewer.jumpCameraToGoal?.();
  };

  const updateAppearance = (key: 'shadowIntensity' | 'shadowSoftness' | 'exposure' | 'rotationSpeed', value: number) => {
    setSettings({...settings, [key]: value});
  };

  const selectAnimation = (value: string) => {
    const viewer = viewerRef.current;
    setSelected(value);
    if (value === '__static__') {
      viewer?.pause?.();
      setPlaying(false);
      setStaticRevision((current) => current + 1);
      return;
    }
    if (viewer) { viewer.animationName = value; viewer.currentTime = 0; viewer.play?.({repetitions: Infinity, pingpong: false}); }
    setPlaying(true);
  };

  const togglePlayback = () => {
    const viewer = viewerRef.current;
    if (playing) viewer?.pause?.(); else viewer?.play?.({repetitions: Infinity, pingpong: false});
    setPlaying(!playing);
  };

  const reset = () => {
    const viewer = viewerRef.current;
    const currentRadius = viewer?.getCameraOrbit?.()?.radius ?? 0;
    const resetDistance = initialDistance.current > 0 ? initialDistance.current : currentRadius > 0 ? currentRadius : settings.distance;
    const resetSettings = {...DEFAULTS, distance: resetDistance};
    setSettings(resetSettings);
    setAutoRotate(false);
    if (viewer) {
      viewer.cameraOrbit = `${DEFAULTS.orbitX}deg ${DEFAULTS.orbitY}deg ${resetDistance}m`;
      viewer.cameraTarget = `${DEFAULTS.targetX}m ${DEFAULTS.targetY}m ${DEFAULTS.targetZ}m`;
      viewer.fieldOfView = `${DEFAULTS.fieldOfView}deg`;
      viewer.jumpCameraToGoal?.();
      viewer.resetTurntableRotation?.();
    }
  };
  const stageOptions = stageKeys.map((key) => ({value: key, label: stages?.[key]?.label ?? key}));
  const animationOptions = [
    {value: '__static__', label: '静止'},
    ...available.map((value) => ({value, label: animations[value] ?? value})),
  ];
  // A static reset remounts the element to clear the active mixer action. Feed
  // the current camera state back into the new element so the view does not jump.
  const cameraOrbit = `${settings.orbitX}deg ${settings.orbitY}deg ${settings.distance > 0 ? `${settings.distance}m` : '105%'}`;
  const cameraTarget = `${settings.targetX}m ${settings.targetY}m ${settings.targetZ}m`;

  return <figure className="form-model-viewer">
    <div className="form-model-viewer__stage">
      {ready && !failed ? <model-viewer
        key={`${activeModel}:${staticRevision}`}
        ref={viewerRef}
        src={activeModel}
        poster={activeStage?.poster ?? poster}
        alt={activeTitle}
        camera-controls
        touch-action="pan-y"
        camera-orbit={cameraOrbit}
        camera-target={cameraTarget}
        min-camera-orbit="auto auto 0.2m"
        max-camera-orbit="auto auto 100m"
        field-of-view={`${settings.fieldOfView}deg`}
        min-field-of-view="12deg"
        max-field-of-view="55deg"
        interpolation-decay="120"
        shadow-intensity={String(DEFAULTS.shadowIntensity)}
        shadow-softness={String(DEFAULTS.shadowSoftness)}
        exposure={String(DEFAULTS.exposure)}
        interaction-prompt="none"
      /> : <div className="form-model-viewer__fallback" role="status"><strong>{failed ? '模型暂不可用' : '正在载入'}</strong></div>}
    </div>

    <figcaption>
      <div className="form-model-viewer__controls">
        {stageOptions.length > 0 && <SelectControl label="阶段" value={stage} options={stageOptions} onChange={setStage} />}
        <SelectControl label="动作" value={selected} options={animationOptions} disabled={!ready} onChange={selectAnimation} />
        <button type="button" disabled={selected === '__static__'} onClick={togglePlayback}>{playing ? '暂停' : '播放'}</button>
        <label className="form-model-viewer__toggle"><input type="checkbox" checked={autoRotate} onChange={(event) => setAutoRotate(event.target.checked)} />自动旋转</label>
        <button type="button" onClick={() => setSettingsOpen(!settingsOpen)} aria-expanded={settingsOpen}>参数</button>
      </div>

      {settingsOpen && <div className="form-model-viewer__settings">
        <fieldset>
          <legend>画幅位置</legend>
          <Range label="水平位置 X" value={settings.targetX} min={-1} max={1} step={0.05} unit="m" digits={2} onChange={(value) => updateCamera('targetX', value)} />
          <Range label="垂直位置 Y" value={settings.targetY} min={0} max={1.8} step={0.05} unit="m" digits={2} onChange={(value) => updateCamera('targetY', value)} />
          <Range label="纵深位置 Z" value={settings.targetZ} min={-1} max={1} step={0.05} unit="m" digits={2} onChange={(value) => updateCamera('targetZ', value)} />
        </fieldset>
        <fieldset>
          <legend>观察角度</legend>
          <Range label="水平角度" value={settings.orbitX} min={-180} max={180} step={1} unit="°" onChange={(value) => updateCamera('orbitX', value)} />
          <Range label="俯仰角度" value={settings.orbitY} min={15} max={135} step={1} unit="°" onChange={(value) => updateCamera('orbitY', value)} />
        </fieldset>
        <fieldset>
          <legend>镜头</legend>
          <Range label="镜头距离 R" value={clampControlDistance(settings.distance || initialDistance.current || 4)} min={DISTANCE_MIN} max={DISTANCE_MAX} step={0.05} unit="m" digits={2} onChange={(value) => updateCamera('distance', value)} />
          <Range label="镜头视野" value={settings.fieldOfView} min={12} max={55} step={1} unit="°" onChange={(value) => updateCamera('fieldOfView', value)} />
        </fieldset>
        <fieldset>
          <legend>光照与运动</legend>
          <Range label="曝光" value={settings.exposure} min={0.25} max={2} step={0.05} digits={2} onChange={(value) => updateAppearance('exposure', value)} />
          <Range label="阴影浓度" value={settings.shadowIntensity} min={0} max={1} step={0.05} digits={2} onChange={(value) => updateAppearance('shadowIntensity', value)} />
          <Range label="阴影柔度" value={settings.shadowSoftness} min={0} max={1} step={0.05} digits={2} onChange={(value) => updateAppearance('shadowSoftness', value)} />
          <Range label="旋转速度" value={settings.rotationSpeed} min={4} max={60} step={1} unit="°/s" onChange={(value) => updateAppearance('rotationSpeed', value)} />
        </fieldset>
        <div className="form-model-viewer__settings-actions"><button type="button" onClick={reset}>恢复默认</button></div>
      </div>}
      <small>{activeTitle}</small>
    </figcaption>
  </figure>;
}

function Range({label, value, min, max, step, unit = '', digits = 0, onChange}: {
  label: string; value: number; min: number; max: number; step: number; unit?: string; digits?: number; onChange: (value: number) => void;
}) {
  return <label className="form-model-viewer__range"><span>{label}</span><input type="range" min={min} max={max} step={step} value={value} onChange={(event) => onChange(Number(event.target.value))} /><output>{value.toFixed(digits)}{unit}</output></label>;
}
