import CollapsePanel from './CollapsePanel';
import ExpandPanel from './ExpandPanel';

interface SidebarMenuProps {
  collapsed: boolean;
}

const SidebarMenu = ({ collapsed }: SidebarMenuProps) => {
  if (collapsed) {
    return <CollapsePanel />;
  }

  return <ExpandPanel />;
};

export default SidebarMenu;
