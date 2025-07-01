import styles from './index.module.scss';

interface MenuWrapperProps {
  children: React.ReactNode;
  title: string;
  icon: React.ReactNode;
}

const MenuWrapper = ({
  children,
  title,
  // icon
}: MenuWrapperProps) => {
  return (
    <div className={styles.menuWrapper}>
      <div className={styles.menuWrapperHeader}>
        <div className={styles.menuWrapperHeaderTitle}>
          <p>{title}</p>
        </div>
        {/* <div className={styles.menuWrapperHeaderIcon}>
                    {icon}
                </div> */}
      </div>
      {children}
    </div>
  );
};

export default MenuWrapper;
