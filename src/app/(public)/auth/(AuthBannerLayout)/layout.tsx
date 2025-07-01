import Banner from '@/assets/png/Banner.png';
import BannerLayout from '@/layout/Common/BannerLayout';
import React from 'react';

const AuthBannerLayout = ({ children }: { children: React.ReactNode }) => {
  return <BannerLayout bannerImage={Banner}>{children}</BannerLayout>;
};

export default AuthBannerLayout;
