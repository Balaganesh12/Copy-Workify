'use client';

import { useEffect, useState } from 'react';
// Components
import AntdForm from '@/components/antd/Form';
import AntdFormItem from '@/components/antd/Form/FormItem';
import AntdSpace from '@/components/antd/Space';
import ConfirmPasswordFormItem from '@/components/ui/Common/FormItems/ConfirmPassword';
import PasswordFormItem from '@/components/ui/Common/FormItems/Password';
import AntdFormSubmit from '@/components/ui/Common/FormSubmit';
import AuthFormHeader from '@/components/ui/Public/AuthBasicLayout/Header';

import { useMessage } from '@/components/antd/Notification';
import { pageRoutes } from '@/constants/routes';
import { resetPassword } from '@/services/user/auth/resetPassword';
import { validateResetPasswordToken } from '@/services/user/auth/validateResetPasswordToken';
import { Form } from 'antd';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './index.module.scss';

// Constants
const FORM_PROPS = {
  name: 'login',
  layout: 'vertical' as const,
  autoComplete: 'off',
  size: 'large' as const,
};

export default function ResetPasswordPage() {
  const [form] = Form.useForm();
  const link = { href: pageRoutes.LOGIN, text: 'Inloggen' };
  const resetPasswordTitle = 'Wachtwoord opnieuw instellen';
  const [loading, setLoading] = useState(false);
  const [tokenValid, setTokenValid] = useState<null | boolean>(null);
  const [tokenError, setTokenError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { showMessage } = useMessage();
  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      setTokenValid(false);
      setTokenError('Geen token geleverd.');
      return;
    }
    (async () => {
      const res = await validateResetPasswordToken(token);
      if (res.valid) {
        setTokenValid(true);
      } else {
        setTokenValid(false);
        setTokenError(res.error || 'Ongeldige of verlopen link.');
      }
    })();
  }, [token]);

  const onFinish = async ({ password }: { password: string }) => {
    setLoading(true);
    if (!token) {
      setTokenValid(false);
      setTokenError('Geen token geleverd.');
      return;
    }
    const res = await resetPassword(token, password);
    setLoading(false);

    if (res.success) {
      showMessage('success', 'Wachtwoord geüpdatet!');
      router.push(pageRoutes.LOGIN);
    } else {
      showMessage('error', res.message || 'Iets ging mis');
    }
  };

  if (tokenValid === null) {
    return <div>Controleer link...</div>;
  }

  return (
    <div className={styles.resetPasswordPage}>
      {/* Header */}
      <AuthFormHeader link={link} title={resetPasswordTitle} />
      {/* Form */}
      {tokenValid === false ? (
        <div>{tokenError}</div>
      ) : (
        <AntdForm
          {...FORM_PROPS}
          form={form}
          onFinish={onFinish}
          className={styles.resetPasswordForm}
        >
          {/* Password */}
          <PasswordFormItem
            name="password"
            label="Kies je nieuwe wachtwoord"
            placeholder="Voer je nieuwe wachtwoord in"
          />

          {/* Confirm Password */}
          <ConfirmPasswordFormItem
            name="confirmPassword"
            label="Bevestig je nieuwe wachtwoord"
          />

          {/* Submit */}
          <AntdSpace
            direction="vertical"
            size="large"
            className={styles.submitSection}
          >
            <AntdFormItem noStyle>
              <AntdFormSubmit
                form={form}
                type="primary"
                size="large"
                loading={loading}
              >
                Wachtwoord opnieuw instellen
              </AntdFormSubmit>
            </AntdFormItem>
          </AntdSpace>
        </AntdForm>
      )}
    </div>
  );
}
