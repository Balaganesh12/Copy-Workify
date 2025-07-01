import { assets } from '@/assets';
import MenuItem from '@/components/ui/Private/Popover/MenuItem';
import Image from 'next/image';
import styles from './index.module.scss';

const MenuItems = () => {
  return (
    <div className={styles.menuItems}>
      <MenuItem
        label="Instellingen"
        icon={
          <Image
            src={assets.SettingsIcon.src}
            alt={assets.SettingsIcon.alt}
            width={16}
            height={16}
          />
        }
      />
      <MenuItem
        label="Account & Facturatie"
        icon={
          <Image
            src={assets.PaymentCardIcon.src}
            alt={assets.PaymentCardIcon.alt}
            width={16}
            height={16}
          />
        }
      />
      <MenuItem
        label="Team Beheren"
        icon={
          <Image
            src={assets.TeamManagementIcon.src}
            alt={assets.TeamManagementIcon.alt}
            width={16}
            height={16}
          />
        }
      />
      <MenuItem
        label="Donkere modus"
        icon={
          <Image
            src={assets.DarkModeIcon.src}
            alt={assets.DarkModeIcon.alt}
            width={16}
            height={16}
          />
        }
      />
    </div>
  );
};

export default MenuItems;
