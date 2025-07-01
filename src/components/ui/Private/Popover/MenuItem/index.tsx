import { SettingOutlined } from '@ant-design/icons';
import React from 'react';
import styles from './index.module.scss';

interface MenuItemProps {
  icon?: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon = <SettingOutlined style={{ fontSize: '16px' }} />,
  label = 'Settings',
  onClick,
}) => {
  return (
    <div
      className={styles.menuItem}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className={styles.iconWrapper}>{icon}</div>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default MenuItem;
