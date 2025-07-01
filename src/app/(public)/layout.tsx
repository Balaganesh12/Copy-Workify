'use client';

import { pageRoutes } from '@/constants/routes';
import { useUser } from '@/contexts/User';
import PublicLayout from '@/layout/Public';
import '@/styles/antdOverrides/auth.scss';
import AuthOverrideToken from '@/theme/AuthOverrideToken';
import { ConfigProvider } from 'antd';
import { redirect, usePathname } from 'next/navigation';
const Layout = ({ children }: { children: React.ReactNode }) => {
  const { user, userProfile } = useUser();
  const pathname = usePathname();
  const isResetPassword = pathname === pageRoutes.RESET_PASSWORD;

  if (isResetPassword) {
    return <PublicLayout>{children}</PublicLayout>;
  }

  if (user) {
    if (userProfile?.is_onboarded) {
      redirect(pageRoutes.DASHBOARD);
    } else {
      redirect(pageRoutes.ONBOARDING);
    }
  }

  return (
    <ConfigProvider theme={AuthOverrideToken}>
      <PublicLayout>{children}</PublicLayout>
    </ConfigProvider>
  );
};

export default Layout;
