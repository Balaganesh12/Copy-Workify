import { assets } from '@/assets';
import { Typography } from 'antd';
import Image from 'next/image';
import styles from './index.module.scss';

const QuickActionPopover = () => {
  return (
    <div className={styles.container}>
      <div className={styles.actionItem}>
        <Image
          src={assets.TeamMembersIcon.src}
          alt={assets.TeamMembersIcon.alt}
          width={18}
          height={18}
        />
        <Typography.Text>Klanten</Typography.Text>
      </div>
      <div className={styles.actionItem}>
        <Image
          src={assets.Request.src}
          alt={assets.Request.alt}
          width={18}
          height={18}
        />
        <Typography.Text>Verzoeken</Typography.Text>
      </div>
      <div className={styles.actionItem}>
        <Image
          src={assets.Quote.src}
          alt={assets.Quote.alt}
          width={18}
          height={18}
        />
        <Typography.Text>Offertes</Typography.Text>
      </div>
      <div className={styles.actionItem}>
        <Image
          src={assets.Jobs.src}
          alt={assets.Jobs.alt}
          width={18}
          height={16}
        />
        <Typography.Text>Werkbonnen</Typography.Text>
      </div>
    </div>
  );
};

export default QuickActionPopover;
