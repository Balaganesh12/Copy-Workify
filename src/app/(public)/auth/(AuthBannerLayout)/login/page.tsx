'use client';

import { useEffect, useState } from 'react';
// External Libraries
import { Form } from 'antd';
// Components
import AntdCheckbox from '@/components/antd/Checkbox';
import AntdDivider from '@/components/antd/Divider';
import AntdFlex from '@/components/antd/Flex';
import AntdForm from '@/components/antd/Form';
import AntdFormItem from '@/components/antd/Form/FormItem';
import AntdSpace from '@/components/antd/Space';
import AntdTypography from '@/components/antd/Typography';
import EmailFormItem from '@/components/ui/Common/FormItems/Email';
import PasswordFormItem from '@/components/ui/Common/FormItems/Password';
import AntdFormSubmit from '@/components/ui/Common/FormSubmit';
import SocialLogin from '@/components/ui/Common/SocialLogin';
import AuthLayout from '@/components/ui/Public/AuthBannerLayout';
import AuthFormHeader from '@/components/ui/Public/AuthBannerLayout/Header';
// Constants
// Hooks
import { useAppRouter } from '@/utils/routes';
// Utilities
// Styles
import styles from './index.module.scss';
// Types

import { loginUser } from '@/services/user/auth';

import { useMessage } from '@/components/antd/Notification';
import NextLink from '@/components/next/Link';
import { ERROR_MESSAGE } from '@/constants/messages';

type FormValues = {
  email: string;
  password: string;
  remember: boolean;
};

const LoginPage = () => {
  const { reload } = useAppRouter();
  const { showMessage } = useMessage();
  const [form] = Form.useForm<FormValues>();
  const [loading, setLoading] = useState(false);
  const [autoComplete, setAutoComplete] = useState<'on' | 'off'>('off');

  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    const remember = true;

    form.setFieldsValue({
      email: savedEmail || '',
      remember,
    });

    setAutoComplete(savedEmail ? 'on' : 'off');
  }, [form]);

  const onFinish = async (values: FormValues) => {
    setLoading(true);
    try {
      const result = await loginUser(values.email, values.password);

      if (!result.success) {
        showMessage('error', result.message);
      } else {
        showMessage('success', result.message);

        if (values.remember) {
          localStorage.setItem('rememberedEmail', values.email);
          setAutoComplete('on');
        } else {
          localStorage.removeItem('rememberedEmail');
          setAutoComplete('off');
        }

        reload();
      }
    } catch (error) {
      console.error('Login error:', error);
      showMessage('error', ERROR_MESSAGE.AUTH.LOGIN_ERROR);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <AuthFormHeader title="Inloggen bij" />

      <AntdForm
        name="login"
        layout="vertical"
        autoComplete="on"
        size="large"
        form={form}
        onFinish={onFinish}
      >
        {/* Email */}
        <EmailFormItem
          name="email"
          hasFeedback={false}
          autoComplete={autoComplete === 'on' ? 'username' : 'off'}
        />

        {/* Password */}
        <PasswordFormItem
          name="password"
          hasFeedback={false}
          autoComplete={autoComplete === 'on' ? 'current-password' : 'off'}
        />

        <AntdSpace
          direction="vertical"
          size="large"
          className={styles.submitSection}
        >
          <AntdFlex justify="space-between" align="center">
            <AntdFormItem name="remember" valuePropName="checked" noStyle>
              <AntdCheckbox
                onChange={(e) =>
                  setAutoComplete(e.target.checked ? 'on' : 'off')
                }
              >
                Onthoud mij
              </AntdCheckbox>
            </AntdFormItem>
            <NextLink href="/auth/forgot-password">
              Wachtwoord vergeten?
            </NextLink>
          </AntdFlex>

          <AntdFormItem noStyle>
            <AntdFormSubmit form={form} size="large" loading={loading}>
              Inloggen
            </AntdFormSubmit>
          </AntdFormItem>
        </AntdSpace>

        <AntdDivider plain>of log in met</AntdDivider>
        <SocialLogin />
      </AntdForm>

      <AntdSpace className={styles.registerSection}>
        <AntdTypography.Text className={styles.registerText}>
          Nog geen account?
        </AntdTypography.Text>
        <NextLink href="/auth/signup" className={styles.registerLink}>
          Registreren
        </NextLink>
      </AntdSpace>

      <AntdSpace className={styles.termsSection} size={32}>
        <NextLink href="/terms" className={styles.termsLink}>
          Voorwaarden
        </NextLink>
        <NextLink href="/privacy" className={styles.privacyLink}>
          Privacybeleid
        </NextLink>
      </AntdSpace>
    </AuthLayout>
  );
};

export default LoginPage;
