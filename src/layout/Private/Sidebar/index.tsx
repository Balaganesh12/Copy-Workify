import { SidebarProps } from './types';
import Header from './Header';
import styles from './index.module.scss';
import SidebarMenu from './Menu';

const Sidebar = ({ collapsed, setCollapsed, breakpoint }: SidebarProps) => {
  return (
    <div className={styles.sidebar}>
      <Header
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        breakpoint={breakpoint}
      />
      <SidebarMenu collapsed={collapsed} />
    </div>
  );
};

export default Sidebar;
