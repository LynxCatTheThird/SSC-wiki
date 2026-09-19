import React from 'react';
import SelectControl from './SelectControl';
import type { AppearanceSettings, CameraSnapshot, StageDefinition } from './types';

export const STATIC_ANIMATION = '__static__';

type ViewerControlsProps = {
  stages: StageDefinition[];
  stageId: string;
  animation: string | null;
  animations: Array<{ value: string; label: string }>;
  playing: boolean;
  autoRotate: boolean;
  ready: boolean;
  settingsOpen: boolean;
  camera: CameraSnapshot | null;
  homeCamera: CameraSnapshot | null;
  appearance: AppearanceSettings;
  onStageChange: (stageId: string) => void;
  onAnimationChange: (animation: string | null) => void;
  onPlaybackToggle: () => void;
  onAutoRotateChange: (autoRotate: boolean) => void;
  onSettingsToggle: () => void;
  onCameraChange: (key: keyof CameraSnapshot, value: number) => void;
  onAppearanceChange: (key: keyof AppearanceSettings, value: number) => void;
  onReset: () => void;
};

export default function ViewerControls({
  stages,
  stageId,
  animation,
  animations,
  playing,
  autoRotate,
  ready,
  settingsOpen,
  camera,
  homeCamera,
  appearance,
  onStageChange,
  onAnimationChange,
  onPlaybackToggle,
  onAutoRotateChange,
  onSettingsToggle,
  onCameraChange,
  onAppearanceChange,
  onReset,
}: ViewerControlsProps) {
  return (
    <>
      <div className="form-model-viewer__controls">
        {stages.length > 1 && (
          <SelectControl
            label="阶段"
            value={stageId}
            options={stages.map((stage) => ({ value: stage.id, label: stage.label }))}
            onChange={onStageChange}
          />
        )}
        <SelectControl
          label="动作"
          value={animation ?? STATIC_ANIMATION}
          options={[{ value: STATIC_ANIMATION, label: '静止' }, ...animations]}
          disabled={!ready}
          onChange={(value) => onAnimationChange(value === STATIC_ANIMATION ? null : value)}
        />
        <button type="button" disabled={!ready || animation == null} onClick={onPlaybackToggle}>
          {playing ? '暂停' : '播放'}
        </button>
        <label className="form-model-viewer__toggle">
          <input
            type="checkbox"
            checked={autoRotate}
            disabled={!ready}
            onChange={(event) => onAutoRotateChange(event.target.checked)}
          />
          自动旋转
        </label>
        <button type="button" disabled={!ready} onClick={onSettingsToggle} aria-expanded={settingsOpen}>
          参数
        </button>
      </div>

      {settingsOpen && camera && homeCamera && (
        <CameraSettings
          camera={camera}
          homeCamera={homeCamera}
          appearance={appearance}
          onCameraChange={onCameraChange}
          onAppearanceChange={onAppearanceChange}
          onReset={onReset}
        />
      )}
    </>
  );
}

function CameraSettings({
  camera,
  homeCamera,
  appearance,
  onCameraChange,
  onAppearanceChange,
  onReset,
}: {
  camera: CameraSnapshot;
  homeCamera: CameraSnapshot;
  appearance: AppearanceSettings;
  onCameraChange: ViewerControlsProps['onCameraChange'];
  onAppearanceChange: ViewerControlsProps['onAppearanceChange'];
  onReset: () => void;
}) {
  const panSpan = Math.max(0.5, homeCamera.distance * 0.35);
  const bounds = (home: number, current: number) => ({
    min: Math.min(home - panSpan, current),
    max: Math.max(home + panSpan, current),
  });
  const targetX = bounds(homeCamera.targetX, camera.targetX);
  const targetY = bounds(homeCamera.targetY, camera.targetY);
  const targetZ = bounds(homeCamera.targetZ, camera.targetZ);
  const distanceMin = Math.min(homeCamera.distance * 0.35, camera.distance);
  const distanceMax = Math.max(homeCamera.distance * 3, camera.distance);

  return (
    <div className="form-model-viewer__settings">
      <fieldset>
        <legend>画幅位置</legend>
        <Range
          label="水平位置 X"
          value={camera.targetX}
          {...targetX}
          step={0.01}
          unit="m"
          digits={2}
          onChange={(value) => onCameraChange('targetX', value)}
        />
        <Range
          label="垂直位置 Y"
          value={camera.targetY}
          {...targetY}
          step={0.01}
          unit="m"
          digits={2}
          onChange={(value) => onCameraChange('targetY', value)}
        />
        <Range
          label="纵深位置 Z"
          value={camera.targetZ}
          {...targetZ}
          step={0.01}
          unit="m"
          digits={2}
          onChange={(value) => onCameraChange('targetZ', value)}
        />
      </fieldset>
      <fieldset>
        <legend>观察角度</legend>
        <Range
          label="水平角度"
          value={camera.orbitX}
          min={-180}
          max={180}
          step={1}
          unit="°"
          onChange={(value) => onCameraChange('orbitX', value)}
        />
        <Range
          label="俯仰角度"
          value={camera.orbitY}
          min={5}
          max={175}
          step={1}
          unit="°"
          onChange={(value) => onCameraChange('orbitY', value)}
        />
      </fieldset>
      <fieldset>
        <legend>镜头</legend>
        <Range
          label="镜头距离 R"
          value={camera.distance}
          min={distanceMin}
          max={distanceMax}
          step={0.01}
          unit="m"
          digits={2}
          onChange={(value) => onCameraChange('distance', value)}
        />
        <Range
          label="镜头视野"
          value={camera.fieldOfView}
          min={12}
          max={55}
          step={1}
          unit="°"
          onChange={(value) => onCameraChange('fieldOfView', value)}
        />
      </fieldset>
      <fieldset>
        <legend>光照与运动</legend>
        <Range
          label="曝光"
          value={appearance.exposure}
          min={0.25}
          max={2}
          step={0.05}
          digits={2}
          onChange={(value) => onAppearanceChange('exposure', value)}
        />
        <Range
          label="阴影浓度"
          value={appearance.shadowIntensity}
          min={0}
          max={1}
          step={0.05}
          digits={2}
          onChange={(value) => onAppearanceChange('shadowIntensity', value)}
        />
        <Range
          label="阴影柔度"
          value={appearance.shadowSoftness}
          min={0}
          max={1}
          step={0.05}
          digits={2}
          onChange={(value) => onAppearanceChange('shadowSoftness', value)}
        />
        <Range
          label="旋转速度"
          value={appearance.rotationSpeed}
          min={4}
          max={60}
          step={1}
          unit="°/s"
          onChange={(value) => onAppearanceChange('rotationSpeed', value)}
        />
      </fieldset>
      <div className="form-model-viewer__settings-actions">
        <button type="button" onClick={onReset}>
          恢复当前阶段默认视图
        </button>
      </div>
    </div>
  );
}

function Range({
  label,
  value,
  min,
  max,
  step,
  unit = '',
  digits = 0,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  digits?: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="form-model-viewer__range">
      <span>{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <output>
        {value.toFixed(digits)}
        {unit}
      </output>
    </label>
  );
}
