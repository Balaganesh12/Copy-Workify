'use client';

import { assets } from '@/assets';
import { AntdTypography } from '@/components/antd/Typography';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './index.module.scss';
interface NieuweKlantProps {
  title: string;
  url?: string;
  handleBack?: () => void;
}

const BackRouteButton = ({ title, url, handleBack }: NieuweKlantProps) => {
  const router = useRouter();

  const Handleroute = (url: string) => {
    router.push(url);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.backButton}
        type="button"
        onClick={() => {
          if (handleBack) {
            handleBack();
          } else if (url) {
            Handleroute(url);
          }
        }}
      >
        <Image
          width={24}
          height={24}
          priority
          src={assets.GoBackIcon.src}
          alt={assets.GoBackIcon.alt}
        />
      </button>
      <AntdTypography.Title level={1} className={styles.title}>
        {title}
      </AntdTypography.Title>
    </div>
  );
};

export default BackRouteButton;
