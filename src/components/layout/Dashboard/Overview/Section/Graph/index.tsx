import LineChart from '@/components/apexCharts/LineChart';
import Header from '../Header';
import styles from './index.module.scss';

const Graph = () => {
  return (
    <div className={styles.graph}>
      <Header
        title="Totaal aantal klanten"
        subtitle="Volg uw klantengroei in de tijd"
        count="100"
      />
      <div className={styles.graphContent}>
        <LineChart
          series={[
            {
              name: 'Huidig',
              data: [1, 2, 3, 4, 5],
            },
            {
              name: 'Vorig',
              data: [10, 20, 30, 40, 50],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Graph;
