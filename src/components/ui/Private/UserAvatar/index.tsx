import AntdAvatar from '@/components/antd/Avatar';
import { stringToColor } from '@/utils/stringToColor';
import Image from 'next/image';
import styles from './index.module.scss';

interface UserAvatarProps {
  profileImage?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  size?: number;
  className?: string;
  fontSize?: number;
  lineHeight?: number;
}

const UserAvatar: React.FC<UserAvatarProps> = ({
  profileImage,
  firstName,
  lastName,
  size = 32,
  className,
  fontSize = '14px',
  lineHeight = '22px',
}) => {
  const getInitials = () => {
    if (!firstName && !lastName) return '?';
    const firstInitial = firstName ? firstName[0].toUpperCase() : '';
    const lastInitial = lastName ? lastName[0].toUpperCase() : '';
    return `${firstInitial}${lastInitial}`;
  };

  const getBackgroundColor = () => {
    const name = `${firstName || ''} ${lastName || ''}`.trim();
    return stringToColor(name || 'User') as {
      backgroundColor: string;
      color: string;
    };
  };

  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt="avatar"
        className={className}
        width={size}
        height={size}
        style={{ borderRadius: '50%' }}
      />
    );
  }

  return (
    <div>
      <AntdAvatar
        className={className + ' ' + styles.avatar}
        size={size}
        style={{
          backgroundColor: getBackgroundColor().backgroundColor,
          color: getBackgroundColor().color,
          fontSize: fontSize,
          lineHeight: lineHeight,
        }}
      >
        {getInitials()}
      </AntdAvatar>
    </div>
  );
};

export default UserAvatar;
