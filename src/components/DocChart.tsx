import React, {useEffect, useRef} from 'react';
import {useColorMode} from '@docusaurus/theme-common';
import type {EChartsOption} from 'echarts';

type Props = {
  ariaLabel: string;
  option: EChartsOption;
};

export default function DocChart({ariaLabel, option}: Props) {
  const elementRef = useRef<HTMLDivElement>(null);
  const {colorMode} = useColorMode();

  useEffect(() => {
    let disposed = false;
    let resizeObserver: ResizeObserver | undefined;
    let chart: import('echarts').ECharts | undefined;

    void import('echarts').then((echarts) => {
      if (disposed || !elementRef.current) return;
      chart = echarts.init(elementRef.current, colorMode === 'dark' ? 'dark' : undefined, {
        renderer: 'svg',
      });
      chart.setOption({
        backgroundColor: 'transparent',
        textStyle: {fontFamily: 'system-ui, sans-serif'},
        ...option,
      });
      resizeObserver = new ResizeObserver(() => chart?.resize());
      resizeObserver.observe(elementRef.current);
    });

    return () => {
      disposed = true;
      resizeObserver?.disconnect();
      chart?.dispose();
    };
  }, [colorMode, option]);

  return <div aria-label={ariaLabel} className="doc-chart" ref={elementRef} role="img" />;
}
