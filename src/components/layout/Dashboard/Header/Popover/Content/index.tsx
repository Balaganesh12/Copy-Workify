import styles from './index.module.scss';
import MenuItems from './Section/MenuItem';

const Content = () => {
  return (
    <div className={styles.content}>
      <MenuItems />
    </div>
  );
};

export default Content;
