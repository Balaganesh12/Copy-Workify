import Chart from '../../../../../apexCharts/PieChart';
import Header from '../Header';
import styles from './index.module.scss';
import Stats from './Series';

const PieChart = () => {
  const leads = 275;
  const active = 275;
  const inactive = 213;

  const series = [leads, active, inactive];
  const total = series.reduce((a, b) => a + b, 0);
  const percentages = series.map((value) => ((value / total) * 100).toFixed(1));

  return (
    <div className={styles.pieChart}>
      <Header
        title="Klantenverdeling"
        subtitle="Overzicht klanten per status"
      />
      <div className={styles.pieChartContent}>
        <Chart leads={leads} active={active} inactive={inactive} />
        <Stats
          percentages={percentages}
          leads={leads}
          active={active}
          inactive={inactive}
        />
      </div>
    </div>
  );
};

export default PieChart;
