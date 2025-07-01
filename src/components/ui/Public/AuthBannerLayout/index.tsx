// Styles
import styles from './index.module.scss';

// Types
type AuthLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const AuthLayout = ({ children, className }: AuthLayoutProps) => {
  return (
    <div className={styles.formContainer}>
      <div className={`${styles.formWrapper} ${className}`}>{children}</div>
    </div>
  );
};

export default AuthLayout;
