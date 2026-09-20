import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { createViewerState, viewerReducer } from './viewerState.ts';
import type { CameraSnapshot } from './types.ts';

const camera: CameraSnapshot = {
  orbitX: 0,
  orbitY: 75,
  distance: 2,
  targetX: 0,
  targetY: 1,
  targetZ: 0,
  fieldOfView: 30,
};

describe('viewerReducer', () => {
  it('resets model-specific state and advances the generation when selecting a stage', () => {
    const ready = {
      ...createViewerState('first'),
      phase: 'ready' as const,
      moduleReady: true,
      availableAnimations: ['idle'],
      animation: 'idle',
      playing: true,
      camera,
      homeCamera: camera,
    };

    const next = viewerReducer(ready, { type: 'SELECT_STAGE', stageId: 'second' });

    assert.deepEqual(
      {
        phase: next.phase,
        generation: next.generation,
        stageId: next.stageId,
        availableAnimations: next.availableAnimations,
        animation: next.animation,
        playing: next.playing,
        camera: next.camera,
        homeCamera: next.homeCamera,
      },
      {
        phase: 'loading',
        generation: 1,
        stageId: 'second',
        availableAnimations: [],
        animation: null,
        playing: false,
        camera: null,
        homeCamera: null,
      },
    );
  });

  it('ignores completion events from an obsolete model load', () => {
    const state = { ...createViewerState('second'), phase: 'loading' as const, generation: 2 };

    const next = viewerReducer(state, {
      type: 'MODEL_LOADED',
      generation: 1,
      camera,
      animations: ['idle'],
      animation: 'idle',
      playing: true,
    });

    assert.equal(next, state);
  });

  it('only accepts camera events for the active, ready model', () => {
    const ready = { ...createViewerState('first'), phase: 'ready' as const, generation: 3, camera };
    const moved = { ...camera, orbitX: 45 };

    assert.equal(viewerReducer(ready, { type: 'CAMERA_CHANGED', generation: 2, camera: moved }), ready);
    assert.equal(viewerReducer(ready, { type: 'CAMERA_CHANGED', generation: 3, camera: moved }).camera, moved);
  });
});
