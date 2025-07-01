'use client';

import { pageRoutes } from '@/constants/routes';
import { useUser } from '@/contexts/User';
import BannerLayout from '@/layout/Common/BannerLayout';
import BannerContent from '@/section/Onboarding/Banner/index';
import { redirect } from 'next/navigation';
import React from 'react';

const OnboardingLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, userProfile } = useUser();

  if (!user) {
    redirect(pageRoutes.LOGIN);
  } else if (userProfile?.is_onboarded) {
    redirect(pageRoutes.DASHBOARD);
  } else {
    return (
      <BannerLayout bannerChildren={<BannerContent />}>{children}</BannerLayout>
    );
  }
};

export default OnboardingLayout;
