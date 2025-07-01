'use client';

import { assets } from '@/assets';
import AntdTypography from '@/components/antd/Typography';
import NextLink from '@/components/next/Link';
import { Typography } from 'antd';
import Image from 'next/image';
import styles from './index.module.scss';

const { Title } = Typography;

type AuthFormHeaderProps = {
  link?: {
    href: string;
    text: string;
  };
  email?: string;
  title: string;
  text?: string;
};

const AuthFormHeader = ({ link, email, title, text }: AuthFormHeaderProps) => {
  return (
    <div className={styles.formHeader}>
      {link && (
        <NextLink href={link.href} className={styles.registerLink}>
          <Image
            width={24}
            height={24}
            src={assets.chevrons.ChevronLeft.src}
            alt={assets.chevrons.ChevronLeft.alt}
          />
          {link.text}
        </NextLink>
      )}
      <div className={styles.logoExpanded}>
        <Image
          src={assets.logoIcon.src}
          alt={assets.logoIcon.alt}
          width={32}
          height={32}
          priority
        />
        <Title level={4} className={styles.logoTitle}>
          Workify
        </Title>
      </div>

      <AntdTypography.Title level={1} className={styles.resetPasswordTitle}>
        {title}
      </AntdTypography.Title>
      {email ? (
        <AntdTypography.Title
          level={3}
          className={styles.resetPasswordTextEmail}
        >
          <div>Er is een link verstuurd naar je e-mailadres</div>
          <div>
            <span className={styles.email}>{email}</span> om je wachtwoord
            opnieuw in te stellen.
          </div>
          <div>
            Volg de link in je e-mail om je nieuwe wachtwoord in te stellen.
          </div>
        </AntdTypography.Title>
      ) : (
        <AntdTypography.Title level={3} className={styles.resetPasswordText}>
          {text}
        </AntdTypography.Title>
      )}
    </div>
  );
};

export default AuthFormHeader;
