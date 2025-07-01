import ReactApexChart from 'react-apexcharts';
import styles from './index.module.scss';

interface ChartProps {
  leads: number;
  active: number;
  inactive: number;
}
const Chart = ({ leads, active, inactive }: ChartProps) => {
  const total = leads + active + inactive;
  const isAllZero = total === 0;

  const state = {
    series: isAllZero ? [0.01] : [leads, active, inactive],
    options: {
      chart: {
        type: 'donut' as const,
        width: 160,
        height: 160,
        toolbar: { show: false },
        animations: { enabled: false },
        events: {},
      },
      labels: isAllZero ? ['Geen data'] : ['Leads', 'Actief', 'Inactief'],
      colors: isAllZero ? ['#F3F4F6'] : ['#CDC8FF', '#CDF0D9', '#FEE4E2'],
      dataLabels: { enabled: false },
      legend: { show: false },
      tooltip: { enabled: false },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            labels: {
              show: true,
              name: {
                offsetY: 14,
              },
              value: {
                offsetY: -20,
                color: '#1F2937',
                fontFamily: 'Inter',
                fontSize: '20px',
                fontWeight: 600,
                lineHeight: '24px',
              },
              total: {
                show: true,
                label: 'Totaal klanten',
                fontSize: '11px',
                color: '#1F2937',
                fontWeight: 400,
                fontFamily: 'Inter',
                lineHeight: '16px',
                formatter: () => (isAllZero ? '0' : `${total}`),
              },
            },
          },
        },
        states: {
          hover: {
            filter: { type: 'none' },
          },
          active: {
            filter: { type: 'none' },
          },
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 160,
              height: 160,
            },
          },
        },
      ],
    },
  };

  return (
    <div className={styles.chart}>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
        width={160}
        height={160}
      />
    </div>
  );
};

export default Chart;
