'use client';

import { pageRoutes } from '@/constants/routes';
import { useUser } from '@/contexts/User';
import PrivateLayout from '@/layout/Private';
import { redirect } from 'next/navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { user, userProfile } = useUser();

  if (!user || !userProfile) {
    redirect(pageRoutes.LOGIN);
  } else if (userProfile.is_onboarded == false) {
    redirect(pageRoutes.ONBOARDING);
  } else {
    return <PrivateLayout>{children}</PrivateLayout>;
  }
};

export default Layout;
