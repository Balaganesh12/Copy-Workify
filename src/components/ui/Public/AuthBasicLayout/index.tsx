// Styles
import styles from './index.module.scss';

// Types
type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className={styles.authBasicLayout}>
      <div className={styles.authBasicLayoutContent}>{children}</div>
    </div>
  );
};

export default AuthLayout;
