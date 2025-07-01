import NextLink from '@/components/next/Link';
import { Tooltip } from 'antd';
import Image from 'next/image';
import styles from './index.module.scss';

interface MenuItemProps {
  icon: string;
  label: string;
  href?: string;
}

const MenuItem = ({ icon, label, href }: MenuItemProps) => {
  const content = (
    <div className={styles.headerInnerContainer}>
      <div className={styles.logoCompact}>
        <Image src={icon} alt={label} width={20} height={20} priority />
      </div>
    </div>
  );

  return (
    <Tooltip placement="right" title={label}>
      {href ? (
        <NextLink href={href} className={styles.menuItemLink}>
          {content}
        </NextLink>
      ) : (
        content
      )}
    </Tooltip>
  );
};

export default MenuItem;
