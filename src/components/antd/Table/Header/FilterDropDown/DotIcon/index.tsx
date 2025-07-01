import styles from './index.module.scss';

const DotIcon = ({ color }: { color: string | undefined }) => {
  if (!color) return null;

  return <div className={styles.dotIcon} style={{ backgroundColor: color }} />;
};

export default DotIcon;
