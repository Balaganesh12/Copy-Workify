'use client';

import { assets } from '@/assets/index';
import AntdTitle from '@/components/antd/Title';
import AntdTypography from '@/components/antd/Typography';
import { Flex } from 'antd';
import Image from 'next/image';
import styles from './index.module.scss';

const BannerContent = () => {
  return (
    <Flex vertical align="center" className={styles.container}>
      <AntdTitle level={1} className={styles.mainTitle}>
        Workify
      </AntdTitle>

      <Flex vertical align="center" className={styles.contentWrapper}>
        <Flex vertical align="center" gap={8} className={styles.textContent}>
          <AntdTitle level={3} className={styles.subtitle}>
            Let's set up your workspace
          </AntdTitle>
          <AntdTypography.Text type="secondary" className={styles.description}>
            Just a few quick steps to customize your account and you'll be ready
            to go
          </AntdTypography.Text>
        </Flex>

        <div className={styles.imageWrapper}>
          <Image
            src={assets.OnboardingBanner.src}
            alt={assets.OnboardingBanner.alt}
            width={335}
            height={240}
            priority
          />
        </div>
      </Flex>
    </Flex>
  );
};

export default BannerContent;
