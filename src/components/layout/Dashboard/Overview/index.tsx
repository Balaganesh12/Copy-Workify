import Header from './Header';
import styles from './index.module.scss';

const Overview = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.overview}>
      <Header />
      <div className={styles.overviewContent}>{children}</div>
    </div>
  );
};

export default Overview;
