'use client';

import { Drawer, Grid, Layout } from 'antd';
import type { DrawerStyles } from 'antd/es/drawer/DrawerPanel';
import React, { useEffect, useState } from 'react';
import HeaderBar from './MainContent/HeaderBar';
import Sidebar from './Sidebar';
import styles from './index.module.scss';

const { Header, Sider, Content } = Layout;
const siderWidth = 240;
const { useBreakpoint } = Grid;

const drawerStyles: DrawerStyles = {
  body: {
    padding: 0,
  },
};

const siderStyles: React.CSSProperties = {
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};

const headerStyles: React.CSSProperties = {
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: 0,
  height: '64px',
};

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  const screens = useBreakpoint();
  const [mounted, setMounted] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const isMobile = mounted ? !screens.md : false;

  const handleBreakpoint = (broken: boolean) => {
    setCollapsed(broken);
  };

  const toggleDrawer = () => {
    setCollapsed(false);
    setDrawerVisible(!drawerVisible);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Layout hasSider>
      {!isMobile ? (
        <Sider
          width={siderWidth}
          collapsed={collapsed}
          onBreakpoint={handleBreakpoint}
          breakpoint="md"
          style={siderStyles}
        >
          <Sidebar
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            breakpoint={false}
          />
        </Sider>
      ) : (
        <Drawer
          placement="left"
          width={siderWidth}
          title=""
          closable={false}
          onClose={toggleDrawer}
          open={drawerVisible}
          styles={drawerStyles}
        >
          <Sidebar
            collapsed={collapsed}
            setCollapsed={toggleDrawer}
            breakpoint={true}
          />
        </Drawer>
      )}
      <Layout>
        <Header style={headerStyles}>
          <HeaderBar onMenuClick={toggleDrawer} isMobile={isMobile} />
        </Header>
        <Content className={styles.content}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default PrivateLayout;
