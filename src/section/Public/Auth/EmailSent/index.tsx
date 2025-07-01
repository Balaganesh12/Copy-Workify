'use client';

import AntdButton from '@/components/antd/Button';
import AntdTypography from '@/components/antd/Typography';
import AuthFormHeader from '@/components/ui/Public/AuthBasicLayout/Header';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';

type EmailSentProps = {
  email: string;
  link: { href: string; text: string };
  onFinish?: () => void;
};

const EmailSent = ({ email, link, onFinish }: EmailSentProps) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleResendClick = () => {
    if (isDisabled) {
      return;
    }

    // Call onFinish to trigger email resend
    onFinish?.();

    setIsDisabled(true);
    setSecondsLeft(30);

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className={styles.emailSentPage}>
      <AuthFormHeader
        link={link}
        email={email}
        title={'Controleer je e-mail'}
      />
      <div className={styles.resetLinkSent}>
        <AntdTypography.Title level={3} className={styles.resetLinkSentTitle}>
          Geen link ontvangen?
        </AntdTypography.Title>
        <AntdButton
          size="large"
          variant="outlined"
          className={
            styles.resetLinkSentButton +
            ' ' +
            (isDisabled ? styles.disabled : '')
          }
          onClick={handleResendClick}
        >
          {isDisabled
            ? `Opnieuw versturen (${secondsLeft})`
            : 'Link opnieuw versturen'}
        </AntdButton>
      </div>
    </div>
  );
};

export default EmailSent;
