import { assets } from '@/assets';
import Image from 'next/image';
import React from 'react';
import styles from './index.module.scss';

interface VersionInfoSectionProps {
  version?: string;
}

const VersionInfoSection: React.FC<VersionInfoSectionProps> = ({ version }) => {
  return (
    <div className={styles.section}>
      <div className={styles.menuItem}>
        <Image
          src={assets.InformationIcon.src}
          alt={assets.InformationIcon.alt}
          width={12}
          height={12}
        />
        <span className={styles.text}>Versie {version}</span>
      </div>
      <div className={styles.menuItem}>
        <Image
          src={assets.CopyWriteIcon.src}
          alt={assets.CopyWriteIcon.alt}
          width={12}
          height={12}
        />
        <span className={styles.text}>Workify. Alle rechten voorbehouden.</span>
      </div>
    </div>
  );
};

export default VersionInfoSection;
