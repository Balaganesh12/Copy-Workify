'use client';

import { pageRoutes } from '@/constants/routes';
import EmailSent from '@/section/Public/Auth/EmailSent';
import { useSearchParams } from 'next/navigation';

const SignupSuccessPage = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';

  const link = { href: pageRoutes.SIGNUP, text: 'Registreer' };

  return <EmailSent email={email} link={link} />;
};

export default SignupSuccessPage;
