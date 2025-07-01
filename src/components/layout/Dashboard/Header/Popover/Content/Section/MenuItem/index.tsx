import { assets } from '@/assets';
import MenuItem from '@/components/ui/Private/Popover/MenuItem';
import Image from 'next/image';
import styles from './index.module.scss';

const MenuItems = () => {
  return (
    <div className={styles.menuItems}>
      <MenuItem
        label="Exporteer klanten"
        icon={
          <Image
            src={assets.ExportIcon.src}
            alt={assets.ExportIcon.alt}
            width={20}
            height={20}
            loading="eager"
          />
        }
      />
    </div>
  );
};

export default MenuItems;
