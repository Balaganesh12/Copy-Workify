'use client';

// External Libraries
import { Form } from 'antd';
// React
import { useState } from 'react';
// Components
import AntdForm from '@/components/antd/Form';
import AntdFormItem from '@/components/antd/Form/FormItem';
import AntdSpace from '@/components/antd/Space';
import EmailFormItem from '@/components/ui/Common/FormItems/Email';
import AntdFormSubmit from '@/components/ui/Common/FormSubmit';
import AuthFormHeader from '@/components/ui/Public/AuthBasicLayout/Header';
import EmailSent from '@/section/Public/Auth/EmailSent';
// Styles
import styles from './index.module.scss';
// Types
import { useMessage } from '@/components/antd/Notification';
import { pageRoutes } from '@/constants/routes';
import { forgotPassword } from '@/services/user/auth';

type FormValues = {
  email: string;
  password: string;
};

// Constants
const FORM_PROPS = {
  name: 'login',
  layout: 'vertical' as const,
  autoComplete: 'off',
  size: 'large' as const,
};

const ForgotPasswordPage = () => {
  const [form] = Form.useForm();
  const [resetLinkSent, setResetLinkSent] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { showMessage } = useMessage();

  const link = resetLinkSent
    ? { href: pageRoutes.LOGIN, text: 'Terug' }
    : { href: pageRoutes.LOGIN, text: 'Inloggen' };

  const onFinish = async (values?: FormValues) => {
    try {
      setIsLoading(true);
      const emailToSend = values?.email || email;
      // Call the server action directly
      // Construct headers for IP, user-agent, and origin if needed
      const headers = new Headers({
        'x-forwarded-for':
          typeof window !== 'undefined' ? window.location.hostname : 'unknown',
        'user-agent':
          typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
        origin: typeof window !== 'undefined' ? window.location.origin : '',
        host: typeof window !== 'undefined' ? window.location.host : '',
      });

      const result = await forgotPassword(emailToSend, headers);
      if (!result.success) {
        throw new Error(
          result.message || 'Er is iets misgegaan. Probeer het opnieuw.',
        );
      }
      if (values?.email) {
        setEmail(values.email);
        setResetLinkSent(true);
        showMessage(
          'success',
          'Er is een e-mail verstuurd met een beveiligde link waarmee je een nieuw wachtwoord voor je account kunt aanmaken.',
        );
      }
    } catch (error: unknown) {
      console.error(error);
      showMessage('error', 'Er is iets misgegaan. Probeer het opnieuw.');
    } finally {
      setIsLoading(false);
    }
  };

  if (resetLinkSent) {
    return <EmailSent email={email} link={link} onFinish={() => onFinish()} />;
  }

  return (
    <div className={styles.resetPasswordPage}>
      {/* Header */}
      <AuthFormHeader
        link={link}
        email={email}
        title={'Wachtwoord opnieuw instellen'}
        text={
          'Je ontvangt een e-mail met een beveiligde link waarmee je een nieuw wachtwoord voor je account kunt aanmaken.'
        }
      />

      {/* Form */}
      <AntdForm
        {...FORM_PROPS}
        form={form}
        onFinish={onFinish}
        className={styles.resetPasswordForm}
      >
        {/* Email */}
        <EmailFormItem name="email" />

        {/* Submit */}
        <AntdSpace
          direction="vertical"
          size="large"
          className={styles.submitSection}
        >
          <AntdFormItem noStyle>
            <AntdFormSubmit form={form} size="large" loading={isLoading}>
              Verstuur herstel-link
            </AntdFormSubmit>
          </AntdFormItem>
        </AntdSpace>
      </AntdForm>
    </div>
  );
};

export default ForgotPasswordPage;
