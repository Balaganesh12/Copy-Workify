import React from 'react';
import styles from './index.module.scss';

const AuthBasicLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.AuthBasicLayout}>{children}</div>;
};

export default AuthBasicLayout;
