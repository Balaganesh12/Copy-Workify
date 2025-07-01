import { assets } from '@/assets';
import CustomPopover from '@/components/antd/Popover';
import QuickActionPopover from '@/components/ui/Private/Sidebar/QuickActionPopover';
import { pageRoutes } from '@/constants/routes';
import MenuItem from './Components/MenuItem';
import MenuWrapper from './Components/MenuWrapper';
import styles from './index.module.scss';

const ExpandPanel = () => {
  return (
    <div className={styles.expandPanel}>
      <section className={styles.sidebarMenuBody}>
        <div>
          <CustomPopover placement="right" content={<QuickActionPopover />}>
            <span>
              <MenuItem label="Nieuw" icon={assets.CirclePlus.src} />
            </span>
          </CustomPopover>
          <MenuItem
            label="Dashboard"
            icon={assets.Home.src}
            href={pageRoutes.DASHBOARD}
          />
        </div>

        <MenuWrapper title="Klantbeheer" icon={assets.chevrons.ChevronUp.src}>
          <MenuItem
            label="Planbord"
            icon={assets.Planner.src}
            href={pageRoutes.PLANNING_BOARD}
          />
          <MenuItem
            label="Klanten"
            icon={assets.TeamMembersIcon.src}
            href={pageRoutes.CLIENTS.dashboard}
          />
        </MenuWrapper>

        <MenuWrapper title="Werkstromen" icon={assets.chevrons.ChevronUp.src}>
          <MenuItem
            label="Verzoeken"
            icon={assets.Request.src}
            href={pageRoutes.REQUESTS}
          />
          <MenuItem
            label="Offertes"
            icon={assets.Quote.src}
            href={pageRoutes.QUOTES}
          />
          <MenuItem
            label="Werkbonnen"
            icon={assets.Jobs.src}
            href={pageRoutes.WORK_ORDERS}
          />
          <MenuItem
            label="Facturen"
            icon={assets.Invoices.src}
            href={pageRoutes.INVOICES}
          />
        </MenuWrapper>

        <MenuWrapper title="Backoffice" icon={assets.chevrons.ChevronUp.src}>
          <MenuItem
            label="Sjablonen"
            icon={assets.Services.src}
            href={pageRoutes.TEMPLATES}
          />
          <MenuItem
            label="Voorraad"
            icon={assets.Inventory.src}
            href={pageRoutes.INVENTORY}
          />
          <MenuItem
            label="Tarievenboek"
            icon={assets.PricingBook.src}
            href={pageRoutes.PRICING_BOOK}
          />
        </MenuWrapper>
      </section>

      <section className={styles.sidebarMenuFooter}>
        <div>
          <MenuItem
            label="Referral Programma"
            icon={assets.ReferralProgram.src}
            href={pageRoutes.REFERRAL_PROGRAM}
          />
          <MenuItem
            label="Support"
            icon={assets.Support.src}
            href={pageRoutes.SUPPORT}
          />
          <MenuItem
            label="Accountinstellingen"
            icon={assets.AccountSettings.src}
            href={pageRoutes.ACCOUNT_SETTINGS}
          />
        </div>
      </section>
    </div>
  );
};

export default ExpandPanel;
