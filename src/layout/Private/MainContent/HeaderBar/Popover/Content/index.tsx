import styles from './index.module.scss';
import LogoutSection from './Section/Logout';
import MenuItems from './Section/MenuItem';
import VersionInfoSection from './Section/VersionInfoSection';

const Content = () => {
  return (
    <div className={styles.content}>
      <MenuItems />
      <VersionInfoSection version="Versie 2.4.1 (build 2412)" />
      <LogoutSection />
    </div>
  );
};

export default Content;
