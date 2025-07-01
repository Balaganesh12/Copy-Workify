'use client';

import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import React from 'react';
import styles from './index.module.scss';

// Dynamically import ApexCharts to avoid SSR errors
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

interface TwoLineChartProps {
  series: { name: string; data: number[] }[];
  options?: ApexOptions;
}

const TwoLineChart: React.FC<TwoLineChartProps> = ({ series, options }) => {
  const defaultOptions: ApexOptions = {
    chart: {
      type: 'line',
      toolbar: { show: false },
      sparkline: {
        enabled: false,
      },
    },
    stroke: {
      width: 2,
      curve: 'straight',
    },
    grid: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true, // <-- Disable tooltip here
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
      labels: {
        useSeriesColors: false,
      },
      markers: {
        strokeWidth: 2,
        shape: 'line',
      },
    },
    colors: ['#0BA5EC', '#E5E7EB'],
  };

  return (
    <div className={styles.chartContainer}>
      <ReactApexChart
        options={options || defaultOptions}
        series={series}
        type="line"
        height={160}
      />
    </div>
  );
};

export default TwoLineChart;
