import React, { useEffect, useMemo, useReducer } from 'react';
import { translate } from '@docusaurus/Translate';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import ViewerControls from './form-model-viewer/ViewerControls';
import type { AppearanceSettings, CameraSnapshot, StageDefinition, ViewPreset } from './form-model-viewer/types';
import { ensureModelViewerDefined, useModelViewerBridge } from './form-model-viewer/useModelViewerBridge';
import { createViewerState, viewerReducer } from './form-model-viewer/viewerState';

type StageInput = {
  label: string;
  title: string;
  model: string;
  poster?: string;
  view?: Partial<ViewPreset>;
  defaultAnimation?: string;
};

export type FormModelViewerProps = {
  model?: string;
  poster?: string;
  title?: string;
  stages?: Record<string, StageInput>;
  animations?: Record<string, string>;
};

export default function FormModelViewer({
  model,
  poster,
  title = translate({ id: 'formModelViewer.defaultTitle', message: '3D 模型' }),
  stages,
  animations = {},
}: FormModelViewerProps) {
  const { withBaseUrl } = useBaseUrlUtils();
  const resolvedPoster = poster ? withBaseUrl(poster) : undefined;
  const stageDefinitions = useMemo<StageDefinition[]>(() => {
    if (stages) {
      return Object.entries(stages).map(([id, stage]) => ({
        id,
        ...stage,
        model: withBaseUrl(stage.model),
        poster: stage.poster ? withBaseUrl(stage.poster) : undefined,
      }));
    }
    return model ? [{ id: '__model__', label: title, title, model: withBaseUrl(model), poster: resolvedPoster }] : [];
  }, [model, resolvedPoster, stages, title, withBaseUrl]);
  const [state, dispatch] = useReducer(viewerReducer, stageDefinitions[0]?.id ?? '', createViewerState);
  const activeStage = stageDefinitions.find((stage) => stage.id === state.stageId) ?? stageDefinitions[0];

  const {
    bindElement,
    element,
    loadStage,
    resetCamera,
    selectAnimation: selectModelAnimation,
    updateAppearance: updateModelAppearance,
    updateAutoRotate,
    updateCamera: updateModelCamera,
    updatePlayback,
  } = useModelViewerBridge({
    onCameraChange: (generation, camera) => dispatch({ type: 'CAMERA_CHANGED', generation, camera }),
    onLoad: (generation, camera, availableAnimations, animation, playing) =>
      dispatch({
        type: 'MODEL_LOADED',
        generation,
        camera,
        animations: availableAnimations,
        animation,
        playing,
      }),
    onError: (generation) => dispatch({ type: 'MODEL_FAILED', generation }),
  });

  useEffect(() => {
    let cancelled = false;
    void ensureModelViewerDefined()
      .then(() => {
        if (!cancelled) dispatch({ type: 'REGISTERED' });
      })
      .catch(() => {
        if (!cancelled) dispatch({ type: 'REGISTRATION_FAILED' });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!activeStage || stageDefinitions.some((stage) => stage.id === state.stageId)) return;
    dispatch({ type: 'SELECT_STAGE', stageId: activeStage.id });
  }, [activeStage, stageDefinitions, state.stageId]);

  useEffect(() => {
    if (!state.moduleReady || !element || !activeStage) return;
    void loadStage(activeStage, state.generation)
      .catch(() => dispatch({ type: 'MODEL_FAILED', generation: state.generation }));
  }, [activeStage, element, loadStage, state.generation, state.moduleReady]);

  useEffect(() => {
    updateModelAppearance(state.appearance);
  }, [state.appearance, updateModelAppearance]);

  useEffect(() => {
    updateAutoRotate(state.phase === 'ready' && state.autoRotate);
  }, [state.autoRotate, state.phase, updateAutoRotate]);

  const updateCamera = (key: keyof CameraSnapshot, value: number) => {
    if (!state.camera) return;
    const camera = { ...state.camera, [key]: value };
    dispatch({ type: 'CAMERA_INPUT', camera });
    updateModelCamera(camera);
  };

  const updateAppearance = (key: keyof AppearanceSettings, value: number) => {
    dispatch({ type: 'SET_APPEARANCE', appearance: { ...state.appearance, [key]: value } });
  };

  const selectAnimation = (animation: string | null) => {
    const playing = animation != null;
    dispatch({ type: 'SELECT_ANIMATION', animation, playing });
    selectModelAnimation(animation, playing);
  };

  const togglePlayback = () => {
    const playing = !state.playing;
    dispatch({ type: 'SET_PLAYING', playing });
    updatePlayback(playing);
  };

  const resetView = () => {
    if (!state.homeCamera) return;
    dispatch({ type: 'RESET_VIEW', camera: state.homeCamera });
    void resetCamera(state.homeCamera);
  };

  const animationOptions = state.availableAnimations.map((value) => ({
    value,
    label: animations[value] ?? value,
  }));

  return (
    <figure className="form-model-viewer">
      <div className="form-model-viewer__stage" aria-busy={state.phase === 'registering' || state.phase === 'loading'}>
        {state.moduleReady && activeStage && (
          <model-viewer
            ref={bindElement}
            poster={activeStage.poster ?? resolvedPoster}
            alt={activeStage.title}
            camera-controls
            touch-action="pan-y"
            min-field-of-view="12deg"
            max-field-of-view="55deg"
            interpolation-decay="120"
            interaction-prompt="none"
          />
        )}
        {state.phase !== 'ready' && (
          <div className="form-model-viewer__fallback" role="status">
            <strong>
              {state.phase === 'error'
                ? state.error === 'registration'
                  ? translate({ id: 'formModelViewer.registrationFailed', message: '模型查看器加载失败' })
                  : translate({ id: 'formModelViewer.modelFailed', message: '模型暂不可用' })
                : translate({ id: 'formModelViewer.loading', message: '正在载入' })}
            </strong>
          </div>
        )}
      </div>

      <figcaption>
        <ViewerControls
          stages={stageDefinitions}
          stageId={activeStage?.id ?? ''}
          animation={state.animation}
          animations={animationOptions}
          playing={state.playing}
          autoRotate={state.autoRotate}
          ready={state.phase === 'ready'}
          settingsOpen={state.settingsOpen}
          camera={state.camera}
          homeCamera={state.homeCamera}
          appearance={state.appearance}
          onStageChange={(stageId) => dispatch({ type: 'SELECT_STAGE', stageId })}
          onAnimationChange={selectAnimation}
          onPlaybackToggle={togglePlayback}
          onAutoRotateChange={(autoRotate) => dispatch({ type: 'SET_AUTO_ROTATE', autoRotate })}
          onSettingsToggle={() => dispatch({ type: 'TOGGLE_SETTINGS' })}
          onCameraChange={updateCamera}
          onAppearanceChange={updateAppearance}
          onReset={resetView}
        />
        <small>{activeStage?.title ?? title}</small>
      </figcaption>
    </figure>
  );
}
