import AntdTypography from '@/components/antd/Typography';
import styles from './index.module.scss';
import { HeaderProps } from './type';

const Header = ({ title, subtitle, count }: HeaderProps) => {
  return (
    <div className={styles.pieChartHeader}>
      <div className={styles.pieChartHeaderTitle}>
        <AntdTypography.Title level={2} className={styles.pieChartHeaderTitle}>
          {title}
        </AntdTypography.Title>
        <AntdTypography.Title
          level={4}
          className={styles.pieChartHeaderSubtitle}
        >
          {subtitle}
        </AntdTypography.Title>
      </div>
      <div className={styles.pieChartHeaderCount}>
        <AntdTypography.Title level={4} className={styles.Count}>
          {count}
        </AntdTypography.Title>
      </div>
    </div>
  );
};

export default Header;
