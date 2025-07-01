import { assets } from '@/assets';
import CustomBadge from '@/components/antd/Badge';
import CustomPopover from '@/components/antd/Popover';
import UserAvatar from '@/components/ui/Private/UserAvatar';
import { useUser } from '@/contexts/User';
import Image from 'next/image';
import React from 'react';
import styles from './index.module.scss';
import Content from './Popover/Content';
import UserProfileSection from './Popover/Header';

// interface UserProfile {
//   id: string;
//   first_name: string;
//   last_name: string;
//   email: string;
//   profile_image: string;
// }

interface HeaderProps {
  onSearch?: (value: string) => void;
  notificationCount?: number;
  avatarUrl?: string;
  onMenuClick?: () => void;
  isMobile?: boolean;
}

const LayoutHeader: React.FC<HeaderProps> = ({
  onMenuClick,
  isMobile,
  notificationCount = 1,
  avatarUrl,
}) => {
  const { userProfile } = useUser();
  const firstName = userProfile?.first_name;
  const lastName = userProfile?.last_name;

  return (
    <div className={styles.mainHeader}>
      <div className={styles.logoCompact} onClick={onMenuClick}>
        {isMobile && (
          <Image
            src={assets.logoIcon.src}
            alt={assets.logoIcon.alt}
            width={24}
            height={24}
          />
        )}
      </div>
      <div className={styles.searchContainer}>
        {/* <SearchField
            value={searchValue}
            placeholder="Search anything"
            prefix={
              <Image
                src={assets.SearchOutlineIcon}
                alt="search"
                className={styles.searchIcon}
              />
            }
            onChange={(e) => setSearchValue(e)}
          /> */}
      </div>
      <div className={styles.profileActions}>
        <div className={styles.notificationContainer}>
          <CustomBadge
            count={notificationCount}
            offset={[2, 10]}
            className={styles.badge}
            overflowCount={9}
          >
            <Image
              src={assets.NotifyIcon.src}
              alt={assets.NotifyIcon.alt}
              className={styles.notificationIcon}
            />
          </CustomBadge>
        </div>

        <CustomPopover
          title={
            <UserProfileSection
              avatarUrl={avatarUrl}
              firstName={firstName}
              lastName={lastName}
              email={userProfile?.email}
            />
          }
          content={<Content />}
          width={292}
          placement="bottomRight"
        >
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt="avatar"
              className={styles.avatar}
              width={32}
              height={32}
            />
          ) : (
            <UserAvatar
              size={32}
              firstName={firstName}
              lastName={lastName}
              className={styles.avatar}
            />
          )}
        </CustomPopover>
      </div>
    </div>
  );
};

export default LayoutHeader;
