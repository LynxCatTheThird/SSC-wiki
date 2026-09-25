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
  const chartRef = useRef<echarts.ECharts | null>(null);
  const { colorMode } = useColorMode();

  useEffect(() => {
    let resizeObserver: ResizeObserver | undefined;

    if (elementRef.current) {
      const chart = echarts.init(elementRef.current, colorMode === 'dark' ? 'dark' : undefined, {
        renderer: 'svg',
      });
      chartRef.current = chart;
      resizeObserver = new ResizeObserver(() => chart?.resize());
      resizeObserver.observe(elementRef.current);
    }

    return () => {
      resizeObserver?.disconnect();
      chartRef.current?.dispose();
      chartRef.current = null;
    };
  }, [colorMode]);

  useEffect(() => {
    chartRef.current?.setOption(
      {
        backgroundColor: 'transparent',
        textStyle: { fontFamily: 'system-ui, sans-serif' },
        ...option,
      },
      { notMerge: true },
    );
  }, [colorMode, option]);

  return <div aria-label={ariaLabel} className="doc-chart" ref={elementRef} role="img" />;
}
