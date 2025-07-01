'use client';

import { pageRoutes } from '@/constants/routes';
import { useUser } from '@/contexts/User';
import { redirect } from 'next/navigation';

const App = () => {
  const { user, userProfile } = useUser();

  if (user) {
    if (userProfile?.is_onboarded) {
      redirect(pageRoutes.DASHBOARD);
    } else {
      redirect(pageRoutes.ONBOARDING);
    }
  } else {
    redirect(pageRoutes.LOGIN);
  }
};

export default App;
