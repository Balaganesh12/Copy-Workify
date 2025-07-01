'use client';

import { Layout } from 'antd';
import styles from './index.module.scss';

const { Content } = Layout;

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout className={styles.publicLayout}>
      <Content>{children}</Content>
    </Layout>
  );
};

export default PublicLayout;
