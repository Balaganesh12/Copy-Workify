import { MessageProvider } from '@/components/antd/Notification';
import { UserProvider } from '@/contexts/User';
import { createClient } from '@/lib/supabase/server';
import { getUserProfile } from '@/services/user';
import '@/styles/antdOverrides/global.scss';
import '@/styles/common.scss';
import antdThemeTokens from '@/theme/index';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import nlNL from 'antd/locale/nl_NL';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Workify',
  description: 'Workify',
  manifest: '/site.webmanifest',
};

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const RootLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let userProfile = null;

  if (user?.id) {
    const profileResult = await getUserProfile(user.id);
    if (profileResult.success) {
      userProfile = profileResult.data;
    } else {
      console.error(profileResult.message, profileResult.error);
    }
  }

  return (
    <html lang="nl" className={inter.variable}>
      <body className={inter.variable}>
        <AntdRegistry>
          <ConfigProvider theme={antdThemeTokens} locale={nlNL}>
            <MessageProvider>
              <UserProvider user={user} userProfile={userProfile}>
                {children}
              </UserProvider>
            </MessageProvider>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
