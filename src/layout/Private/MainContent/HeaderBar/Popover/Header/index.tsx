import UserAvatar from '@/components/ui/Private/UserAvatar';
import { Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';

interface MenuItemProps {
  avatarUrl?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}

const Header: React.FC<MenuItemProps> = ({
  avatarUrl,
  firstName = '',
  lastName = '',
  email = '',
}) => {
  const name = `${firstName} ${lastName}`;
  return (
    <div className={styles.header}>
      <div className={styles.contentWrapper}>
        <div className={styles.avatarContainer}>
          <UserAvatar
            size={36}
            profileImage={avatarUrl}
            firstName={firstName}
            lastName={lastName}
            className={styles.avatar}
          />
        </div>
        <div className={styles.textContent}>
          <Typography.Text className={`${styles.name} capitalize`}>
            {name}
          </Typography.Text>
          <Typography.Text className={styles.email}>{email}</Typography.Text>
        </div>
      </div>
    </div>
  );
};

export default Header;
