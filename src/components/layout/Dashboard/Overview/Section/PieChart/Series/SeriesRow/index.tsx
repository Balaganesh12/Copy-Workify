import NoData from '../NoData';
import styles from './index.module.scss';

interface SeriesRowProps {
  label: string;
  color: string;
  value: number;
  percentage: string;
}

const SeriesRow = ({ label, color, value, percentage }: SeriesRowProps) => (
  <div className={styles.seriesRow}>
    <div className={styles.dot} style={{ backgroundColor: color }} />
    <span className={styles.label}>{label}</span>
    {value && value > 0 ? (
      <>
        <span className={styles.value}>{value}</span>
        <span className={styles.percentage}>{percentage}%</span>
      </>
    ) : (
      <NoData />
    )}
  </div>
);

export default SeriesRow;
