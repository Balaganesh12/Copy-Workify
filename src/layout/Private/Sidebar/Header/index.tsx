import { assets } from '@/assets/index';
import { Button, Typography } from 'antd';
import Image from 'next/image';
import styles from './index.module.scss';

const { Title } = Typography;

interface HeaderProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  breakpoint: boolean;
}

const Header = ({ collapsed, setCollapsed, breakpoint }: HeaderProps) => {
  return (
    <div className={styles.sidebarHeaderWrapper}>
      {collapsed ? (
        <div
          className={`${styles.headerInnerContainer} ${styles.headerContainerCollapsed}`}
          onClick={() => {
            if (breakpoint) {
            } else {
              setCollapsed(!collapsed);
            }
          }}
        >
          <div className={styles.logoCompact}>
            <Image
              src={assets.logoIcon.src}
              alt={assets.logoIcon.alt}
              width={20}
              height={20}
            />
          </div>
        </div>
      ) : (
        <div
          className={`${styles.headerInnerContainer} ${styles.headerContainerExpanded}`}
        >
          <div
            className={`${styles.logoExpanded} ${collapsed ? styles.hidden : ''}`}
          >
            <Image
              src={assets.logoIcon.src}
              alt={assets.logoIcon.alt}
              width={20}
              height={20}
              priority
            />
            <Title level={4} className={styles.logoTitle}>
              Workify
            </Title>
          </div>
          <div className={styles.collapseButtonWrapper}>
            <Button
              style={{ width: 20, height: 20, padding: 0 }}
              type="text"
              onClick={() => setCollapsed(!collapsed)}
            >
              <Image
                src={assets.SidebarCollapseIcon.src}
                alt={assets.SidebarCollapseIcon.alt}
                width={20}
                height={20}
                priority
              />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
