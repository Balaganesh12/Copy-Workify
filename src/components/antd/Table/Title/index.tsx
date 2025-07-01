import AntdTypography from '@/components/antd/Typography';
import styles from './index.module.scss';

const Title = ({
  totalCount,
  isFiltered,
}: {
  totalCount: number;
  isFiltered?: boolean;
}) => {
  return (
    <div className={styles.dashboardTableTitle}>
      <AntdTypography.Title className={styles.dashboardTableTitleText}>
        Klanten
      </AntdTypography.Title>
      <AntdTypography.Title className={styles.dashboardTableTitleTotal}>
        ({isFiltered ? 'Gefilterd' : 'Totaal'} - {totalCount})
      </AntdTypography.Title>
    </div>
  );
};

export default Title;
