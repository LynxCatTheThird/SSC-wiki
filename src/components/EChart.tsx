import React, { useEffect, useRef } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import type { EChartsOption } from 'echarts';
import * as echarts from 'echarts/core';
import { BarChart, LineChart } from 'echarts/charts';
import {
  AxisPointerComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';

echarts.use([
  AxisPointerComponent,
  BarChart,
  GridComponent,
  LegendComponent,
  LineChart,
  SVGRenderer,
  TitleComponent,
  TooltipComponent,
]);

type Props = {
  ariaLabel: string;
  option?: EChartsOption;
};

export default function EChart({ ariaLabel, option = {} }: Props) {
  const elementRef = useRef<HTMLDivElement>(null);
  const { colorMode } = useColorMode();

  useEffect(() => {
    let disposed = false;
    let resizeObserver: ResizeObserver | undefined;
    let chart: echarts.ECharts | undefined;

    if (elementRef.current) {
      chart = echarts.init(elementRef.current, colorMode === 'dark' ? 'dark' : undefined, {
        renderer: 'svg',
      });
      chart.setOption({
        backgroundColor: 'transparent',
        textStyle: { fontFamily: 'system-ui, sans-serif' },
        ...option,
      });
      resizeObserver = new ResizeObserver(() => chart?.resize());
      resizeObserver.observe(elementRef.current);
    }

    return () => {
      disposed = true;
      resizeObserver?.disconnect();
      chart?.dispose();
    };
  }, [colorMode, option]);

  return <div aria-label={ariaLabel} className="doc-chart" ref={elementRef} role="img" />;
}
