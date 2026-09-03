import React from 'react';
import type {EChartsOption} from 'echarts';
import DocChart from './DocChart';

const experienceOption: EChartsOption = {
  tooltip: {trigger: 'axis', valueFormatter: (value) => `${Number(value).toLocaleString()} 点原版经验`},
  grid: {left: 58, right: 24, top: 36, bottom: 52},
  xAxis: {type: 'category', name: '进化等级', data: ['5', '10', '15', '20', '30', '40', '45', '50']},
  yAxis: {type: 'value', name: '累计原版经验'},
  series: [{
    type: 'line',
    name: '累计经验',
    smooth: true,
    symbolSize: 8,
    areaStyle: {opacity: 0.12},
    data: [110, 320, 630, 1100, 2790, 5840, 8040, 10690],
    markPoint: {
      data: [
        {name: '美西螈点数拿齐', coord: ['40', 5840], value: '6 点'},
        {name: '使魔点数拿齐', coord: ['45', 8040], value: '7 点'},
        {name: '终局分支', coord: ['50', 10690], value: '终局'},
      ],
    },
  }],
};

const recoveryOption: EChartsOption = {
  tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}, valueFormatter: (value) => `${value} 秒`},
  grid: {left: 116, right: 28, top: 28, bottom: 42},
  xAxis: {type: 'value', name: '从空到满的理论时间（秒）'},
  yAxis: {
    type: 'category',
    data: ['SP 悦灵 Mana', 'SP 雪狐（普通）', 'SP 雪狐（适宜环境）', '寄生果蝠（脱战）', '寄生果蝠（交战）'],
  },
  series: [{type: 'bar', name: '恢复时间', data: [26.7, 33.3, 20, 50, 80], label: {show: true, position: 'right', formatter: '{c} 秒'}}],
};

const tickTimeOption: EChartsOption = {
  tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}, valueFormatter: (value) => `${value} 秒`},
  grid: {left: 68, right: 28, top: 30, bottom: 48},
  xAxis: {type: 'category', name: '游戏 tick', data: ['6', '20', '60', '100', '300', '600']},
  yAxis: {type: 'value', name: '现实秒数', min: 0},
  series: [{type: 'bar', name: '换算时间', data: [0.3, 1, 3, 5, 15, 30], label: {show: true, position: 'top', formatter: '{c} 秒'}}],
};

export function EvolutionExperienceChart() {
  return <DocChart ariaLabel="进化等级所需累计原版经验折线图" option={experienceOption} />;
}

export function ResourceRecoveryChart() {
  return <DocChart ariaLabel="五种资源从空到满的理论恢复时间条形图" option={recoveryOption} />;
}

export function TickTimeChart() {
  return <DocChart ariaLabel="游戏 tick 与现实秒数换算图" option={tickTimeOption} />;
}
