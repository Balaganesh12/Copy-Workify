import { Col, Row } from 'antd';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from './index.module.scss';

const AuthBannerLayout = ({
  children,
  bannerChildren,
  bannerImage,
}: {
  children: React.ReactNode;
  bannerChildren?: React.ReactNode;
  bannerImage?: StaticImageData | string | undefined;
}) => {
  return (
    <Row className={styles.authBannerLayoutContainer}>
      <Col xs={24} sm={24} md={12} span={12} className={styles.formSection}>
        {children}
      </Col>
      <Col xs={0} sm={0} md={12} span={12} className={styles.bannerSection}>
        {bannerChildren ? (
          bannerChildren
        ) : (
          <Image
            className={styles.bannerImage}
            src={bannerImage || ''}
            alt="Banner"
            fill
            priority
          />
        )}
      </Col>
    </Row>
  );
};

export default AuthBannerLayout;
