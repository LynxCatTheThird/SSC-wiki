import React, {useEffect, useState, type ReactNode} from 'react';
import {createPortal} from 'react-dom';
import {Check, Copy} from 'lucide-react';

function sameTargets(left: HTMLElement[], right: HTMLElement[]) {
  return left.length === right.length && left.every((item, index) => item === right[index]);
}

export default function Root({children}: {children: ReactNode}) {
  const [targets, setTargets] = useState<HTMLElement[]>([]);
  const [copied, setCopied] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const collect = () => {
      const next = Array.from(document.querySelectorAll<HTMLElement>('.katex-display'));
      setTargets((current) => (sameTargets(current, next) ? current : next));
    };

    collect();
    const observer = new MutationObserver(collect);
    observer.observe(document.body, {childList: true, subtree: true});
    return () => observer.disconnect();
  }, []);

  const copyTex = async (target: HTMLElement) => {
    const tex = target.querySelector('annotation[encoding="application/x-tex"]')?.textContent;
    if (!tex) return;
    await navigator.clipboard.writeText(tex);
    setCopied(target);
    window.setTimeout(() => setCopied((current) => (current === target ? null : current)), 1600);
  };

  return (
    <>
      {children}
      {targets.map((target, index) =>
        createPortal(
          <button
            aria-label={copied === target ? '已复制 TeX' : '复制 TeX'}
            className="katex-copy-button"
            onClick={() => void copyTex(target)}
            title={copied === target ? '已复制' : '复制 TeX'}
            type="button">
            {copied === target ? <Check aria-hidden="true" size={15} /> : <Copy aria-hidden="true" size={15} />}
          </button>,
          target,
          `${index}`,
        ),
      )}
    </>
  );
}
