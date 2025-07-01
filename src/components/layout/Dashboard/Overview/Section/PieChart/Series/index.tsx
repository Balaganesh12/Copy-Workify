import styles from './index.module.scss';
import SeriesRow from './SeriesRow';

interface SeriesProps {
  percentages: string[];
  leads: number;
  active: number;
  inactive: number;
}

const Series = ({ percentages, leads, active, inactive }: SeriesProps) => {
  const rows = [
    {
      label: 'Leads',
      color: '#CDC8FF',
      value: leads,
      percentage: percentages[0],
    },
    {
      label: 'Actief',
      color: '#CDF0D9',
      value: active,
      percentage: percentages[1],
    },
    {
      label: 'Inactief',
      color: '#FEE4E2',
      value: inactive,
      percentage: percentages[2],
    },
  ];

  return (
    <div className={styles.seriesContainer}>
      {rows.map((row, index) => (
        <SeriesRow key={index} {...row} />
      ))}
    </div>
  );
};

export default Series;
