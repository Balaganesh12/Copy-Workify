import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import styles from './index.module.scss';

interface MenuItemProps {
  icon?: string;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  href?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon = undefined,
  label,
  onClick,
  href,
}) => {
  const router = useRouter();
  return (
    <div
      className={styles.menuItem}
      onClick={(e) => {
        onClick?.(e);
        if (href) {
          router.push(href);
        }
      }}
      role="button"
      tabIndex={0}
    >
      {icon && (
        <div className={styles.iconWrapper}>
          <Image src={icon} alt={label} width={16} height={16} priority />
        </div>
      )}
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default MenuItem;
