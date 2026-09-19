import React, { useEffect, useId, useRef, useState } from 'react';
import { translate } from '@docusaurus/Translate';

export type SelectOption = {
  value: string;
  label: string;
};

type SelectControlProps = {
  label: string;
  value: string;
  options: SelectOption[];
  disabled?: boolean;
  onChange: (value: string) => void;
};

export default function SelectControl({ label, value, options, disabled = false, onChange }: SelectControlProps) {
  const id = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const selectedIndex = Math.max(
    0,
    options.findIndex((option) => option.value === value),
  );
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(selectedIndex);
  const selected = options[selectedIndex];

  const focusOption = (index: number) => {
    const nextIndex = (index + options.length) % options.length;
    setActiveIndex(nextIndex);
    window.requestAnimationFrame(() => optionRefs.current[nextIndex]?.focus());
  };

  const openMenu = (index = selectedIndex) => {
    if (disabled || options.length === 0) return;
    setOpen(true);
    focusOption(index);
  };

  const closeMenu = (restoreFocus = false) => {
    setOpen(false);
    if (restoreFocus) window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  const choose = (index: number) => {
    const option = options[index];
    if (!option) return;
    onChange(option.value);
    setActiveIndex(index);
    closeMenu(true);
  };

  useEffect(() => {
    if (!open) setActiveIndex(selectedIndex);
  }, [open, selectedIndex]);

  useEffect(() => {
    if (!open) return;
    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) closeMenu();
    };
    document.addEventListener('pointerdown', closeOnOutsidePointer);
    return () => document.removeEventListener('pointerdown', closeOnOutsidePointer);
  }, [open]);

  return (
    <div className="form-model-viewer__field" ref={rootRef}>
      <span id={`${id}-label`}>{label}</span>
      <button
        ref={triggerRef}
        type="button"
        className="form-model-viewer__select"
        aria-labelledby={`${id}-label ${id}-value`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-menu`}
        disabled={disabled}
        onClick={() => (open ? closeMenu() : openMenu())}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            openMenu(event.key === 'ArrowDown' ? selectedIndex : selectedIndex - 1);
          }
        }}
      >
        <span id={`${id}-value`}>
          {selected?.label ?? translate({ id: 'formModelViewer.unavailable', message: '不可用' })}
        </span>
        <span className="form-model-viewer__chevron" aria-hidden="true" />
      </button>
      {open && (
        <div className="form-model-viewer__menu" id={`${id}-menu`} role="listbox" aria-labelledby={`${id}-label`}>
          {options.map((option, index) => (
            <button
              ref={(node) => {
                optionRefs.current[index] = node;
              }}
              type="button"
              role="option"
              tabIndex={index === activeIndex ? 0 : -1}
              aria-selected={option.value === value}
              key={option.value}
              onClick={() => choose(index)}
              onKeyDown={(event) => {
                if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                  event.preventDefault();
                  focusOption(activeIndex + (event.key === 'ArrowDown' ? 1 : -1));
                } else if (event.key === 'Home' || event.key === 'End') {
                  event.preventDefault();
                  focusOption(event.key === 'Home' ? 0 : options.length - 1);
                } else if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  choose(index);
                } else if (event.key === 'Escape') {
                  event.preventDefault();
                  closeMenu(true);
                } else if (event.key === 'Tab') {
                  closeMenu();
                }
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
