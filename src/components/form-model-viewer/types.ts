export type CameraSnapshot = {
  orbitX: number;
  orbitY: number;
  distance: number;
  targetX: number;
  targetY: number;
  targetZ: number;
  fieldOfView: number;
};

export type AppearanceSettings = {
  exposure: number;
  shadowIntensity: number;
  shadowSoftness: number;
  rotationSpeed: number;
};

export type ViewPreset = {
  cameraOrbit: string;
  cameraTarget: string;
  fieldOfView: string;
};

export type StageDefinition = {
  id: string;
  label: string;
  title: string;
  model: string;
  poster?: string;
  view?: Partial<ViewPreset>;
  defaultAnimation?: string;
};

export type CameraChangeSource = 'user-interaction' | 'automatic' | 'none';

export type ModelViewerElement = HTMLElement & {
  src?: string;
  alt?: string;
  poster?: string;
  loaded?: boolean;
  animationName?: string;
  availableAnimations?: string[];
  currentTime?: number;
  cameraOrbit?: string;
  cameraTarget?: string;
  fieldOfView?: string;
  minCameraOrbit?: string;
  maxCameraOrbit?: string;
  exposure?: number;
  shadowIntensity?: number;
  shadowSoftness?: number;
  autoRotate?: boolean;
  autoRotateDelay?: number;
  rotationPerSecond?: string;
  readonly updateComplete?: Promise<unknown>;
  getCameraOrbit?: () => { theta: number; phi: number; radius: number };
  getCameraTarget?: () => { x: number; y: number; z: number };
  getFieldOfView?: () => number;
  jumpCameraToGoal?: () => void;
  updateFraming?: () => Promise<void>;
  pause?: () => void;
  play?: (options?: { repetitions: number; pingpong: boolean }) => void;
  resetTurntableRotation?: (theta?: number) => void;
};

export const DEFAULT_APPEARANCE: AppearanceSettings = {
  exposure: 1,
  shadowIntensity: 0.55,
  shadowSoftness: 0.85,
  rotationSpeed: 24,
};

export const DEFAULT_VIEW: ViewPreset = {
  cameraOrbit: '180deg 75deg 105%',
  cameraTarget: 'auto auto auto',
  fieldOfView: '30deg',
};
