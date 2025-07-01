import { assets } from '@/assets';
import CustomPopover from '@/components/antd/Popover';
import QuickActionPopover from '@/components/ui/Private/Sidebar/QuickActionPopover';
import { pageRoutes } from '@/constants/routes';
import MenuItem from './Components/MenuItem';
import styles from './index.module.scss';

const CollapsePanel = () => {
  return (
    <div className={styles.collapsePanel}>
      <section className={styles.sidebarMenuBody}>
        <div>
          <CustomPopover placement="right" content={<QuickActionPopover />}>
            <span>
              <MenuItem icon={assets.CirclePlus.src} label="Nieuw" />
            </span>
          </CustomPopover>
          <MenuItem
            icon={assets.Home.src}
            label="Dashboard"
            href={pageRoutes.DASHBOARD}
          />
        </div>
        <div>
          <MenuItem
            icon={assets.Planner.src}
            label="Planbord"
            href={pageRoutes.PLANNING_BOARD}
          />
          <MenuItem
            icon={assets.TeamMembersIcon.src}
            label="Klanten"
            href={pageRoutes.CLIENTS.dashboard}
          />
        </div>
        <div>
          <MenuItem
            icon={assets.Request.src}
            label="Verzoeken"
            href={pageRoutes.REQUESTS}
          />
          <MenuItem
            icon={assets.Quote.src}
            label="Offertes"
            href={pageRoutes.QUOTES}
          />
          <MenuItem
            icon={assets.Jobs.src}
            label="Werkbonnen"
            href={pageRoutes.WORK_ORDERS}
          />
        </div>
        <div>
          <MenuItem
            icon={assets.Invoices.src}
            label="Facturen"
            href={pageRoutes.INVOICES}
          />
          <MenuItem
            icon={assets.Services.src}
            label="Sjablonen"
            href={pageRoutes.TEMPLATES}
          />
          <MenuItem
            icon={assets.Inventory.src}
            label="Voorraad"
            href={pageRoutes.INVENTORY}
          />
        </div>
      </section>
      <section className={styles.sidebarMenuFooter}>
        <div>
          <MenuItem
            icon={assets.ReferralProgram.src}
            label="Referral Programma"
            href={pageRoutes.REFERRAL_PROGRAM}
          />
          <MenuItem
            icon={assets.Support.src}
            label="Support"
            href={pageRoutes.SUPPORT}
          />
          <MenuItem
            icon={assets.AccountSettings.src}
            label="Accountinstellingen"
            href={pageRoutes.ACCOUNT_SETTINGS}
          />
        </div>
      </section>
    </div>
  );
};

export default CollapsePanel;
