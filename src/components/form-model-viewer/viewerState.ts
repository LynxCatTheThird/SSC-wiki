import type { AppearanceSettings, CameraSnapshot } from './types.ts';
import { DEFAULT_APPEARANCE } from './types.ts';

export type ViewerPhase = 'registering' | 'loading' | 'ready' | 'error';

export type ViewerState = {
  phase: ViewerPhase;
  moduleReady: boolean;
  generation: number;
  stageId: string;
  availableAnimations: string[];
  animation: string | null;
  playing: boolean;
  autoRotate: boolean;
  appearance: AppearanceSettings;
  homeCamera: CameraSnapshot | null;
  camera: CameraSnapshot | null;
  settingsOpen: boolean;
  error: 'registration' | 'model' | null;
};

export type ViewerAction =
  | { type: 'REGISTERED' }
  | { type: 'REGISTRATION_FAILED' }
  | { type: 'SELECT_STAGE'; stageId: string }
  | {
    type: 'MODEL_LOADED';
    generation: number;
    camera: CameraSnapshot;
    animations: string[];
    animation: string | null;
    playing: boolean;
  }
  | { type: 'MODEL_FAILED'; generation: number }
  | { type: 'CAMERA_CHANGED'; generation: number; camera: CameraSnapshot }
  | { type: 'CAMERA_INPUT'; camera: CameraSnapshot }
  | { type: 'SELECT_ANIMATION'; animation: string | null; playing: boolean }
  | { type: 'SET_PLAYING'; playing: boolean }
  | { type: 'SET_AUTO_ROTATE'; autoRotate: boolean }
  | { type: 'SET_APPEARANCE'; appearance: AppearanceSettings }
  | { type: 'RESET_VIEW'; camera: CameraSnapshot }
  | { type: 'TOGGLE_SETTINGS' };

export function createViewerState(stageId: string): ViewerState {
  return {
    phase: 'registering',
    moduleReady: false,
    generation: 0,
    stageId,
    availableAnimations: [],
    animation: null,
    playing: false,
    autoRotate: false,
    appearance: DEFAULT_APPEARANCE,
    homeCamera: null,
    camera: null,
    settingsOpen: false,
    error: null,
  };
}

export function viewerReducer(state: ViewerState, action: ViewerAction): ViewerState {
  switch (action.type) {
    case 'REGISTERED':
      return { ...state, moduleReady: true, phase: 'loading', error: null };
    case 'REGISTRATION_FAILED':
      return { ...state, phase: 'error', error: 'registration' };
    case 'SELECT_STAGE':
      if (action.stageId === state.stageId) return state;
      return {
        ...state,
        phase: 'loading',
        generation: state.generation + 1,
        stageId: action.stageId,
        availableAnimations: [],
        animation: null,
        playing: false,
        homeCamera: null,
        camera: null,
        error: null,
      };
    case 'MODEL_LOADED':
      if (action.generation !== state.generation) return state;
      return {
        ...state,
        phase: 'ready',
        availableAnimations: action.animations,
        animation: action.animation,
        playing: action.playing,
        homeCamera: action.camera,
        camera: action.camera,
        error: null,
      };
    case 'MODEL_FAILED':
      if (action.generation !== state.generation) return state;
      return { ...state, phase: 'error', error: 'model' };
    case 'CAMERA_CHANGED':
      if (action.generation !== state.generation || state.phase !== 'ready') return state;
      return { ...state, camera: action.camera };
    case 'CAMERA_INPUT':
      return { ...state, camera: action.camera };
    case 'SELECT_ANIMATION':
      return { ...state, animation: action.animation, playing: action.playing };
    case 'SET_PLAYING':
      return { ...state, playing: action.playing };
    case 'SET_AUTO_ROTATE':
      return { ...state, autoRotate: action.autoRotate };
    case 'SET_APPEARANCE':
      return { ...state, appearance: action.appearance };
    case 'RESET_VIEW':
      return { ...state, camera: action.camera, autoRotate: false };
    case 'TOGGLE_SETTINGS':
      return { ...state, settingsOpen: !state.settingsOpen };
  }
}
