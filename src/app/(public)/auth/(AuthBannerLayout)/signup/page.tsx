'use client';

// External Libraries
import { Form } from 'antd';
import { useRouter } from 'next/navigation';

// Components
import AntdDivider from '@/components/antd/Divider';
import AntdForm from '@/components/antd/Form';
import AntdFormItem from '@/components/antd/Form/FormItem';
import AntdSpace from '@/components/antd/Space';
import AntdTypography from '@/components/antd/Typography';
import EmailFormItem from '@/components/ui/Common/FormItems/Email';
import PasswordFormItem from '@/components/ui/Common/FormItems/Password';
import AntdFormSubmit from '@/components/ui/Common/FormSubmit';
import SocialLogin from '@/components/ui/Common/SocialLogin';
import AuthFormHeader from '@/components/ui/Public/AuthBannerLayout/Header';

// Utilities
// Styles
import { useMessage } from '@/components/antd/Notification';
import NextLink from '@/components/next/Link';
import AuthLayout from '@/components/ui/Public/AuthBannerLayout';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '@/constants/messages';
import { pageRoutes } from '@/constants/routes';
import { signupUser } from '@/services/user/auth';
import { passwordValidationRules } from '@/utils/validations/auth';
import { useState } from 'react';
import styles from './index.module.scss';
// Types
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

const SignupPage = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { showMessage } = useMessage();

  const onFinish = async (values: FormValues) => {
    try {
      setIsLoading(true);

      const result = await signupUser(values.email, values.password);

      if (!result.success) {
        showMessage('error', result.message);
        return;
      }

      showMessage('success', SUCCESS_MESSAGE.AUTH.SIGNUP_SUCCESS);

      router.push(
        `${pageRoutes.SIGNUP_SUCCESS}?email=${encodeURIComponent(values.email)}`,
      );
    } catch (error: unknown) {
      if (error instanceof Error) {
        showMessage('error', ERROR_MESSAGE.AUTH.SIGNUP_ERROR);
      } else {
        showMessage('error', ERROR_MESSAGE.AUTH.SIGNUP_ERROR);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      {/* Header */}
      <AuthFormHeader title="Registreer bij" />

      {/* Form */}
      <AntdForm {...FORM_PROPS} form={form} onFinish={onFinish}>
        {/* Email */}
        <EmailFormItem name="email" />

        {/* Password */}
        <PasswordFormItem
          name="password"
          label="Kies een wachtwoord"
          placeholder="Maak een veilig wachtwoord aan"
          rules={passwordValidationRules}
        />

        {/* Submit */}
        <AntdFormItem noStyle>
          <AntdFormSubmit form={form} size="large" loading={isLoading}>
            Doorgaan
          </AntdFormSubmit>
        </AntdFormItem>

        {/* Social Login */}
        <AntdDivider plain>of ga door met</AntdDivider>
        <SocialLogin type="sign" />
      </AntdForm>

      <AntdSpace align="center" direction="vertical" size={8}>
        <span className={styles.termsText}>
          Door door te gaan ga je akkoord met Workify&apos;s
        </span>
        <span className={styles.termsText}>
          <NextLink href={pageRoutes.TERMS} className={styles.termsLink}>
            Voorwaarden
          </NextLink>{' '}
          en{' '}
          <NextLink href={pageRoutes.PRIVACY} className={styles.privacyLink}>
            Privacybeleid
          </NextLink>
        </span>
      </AntdSpace>

      {/* Register Section */}
      <AntdSpace className={styles.registerSection}>
        <AntdTypography.Text className={styles.registerText}>
          Heb je al een account?
        </AntdTypography.Text>
        <NextLink href={pageRoutes.LOGIN} className={styles.registerLink}>
          Inloggen
        </NextLink>
      </AntdSpace>
    </AuthLayout>
  );
};

export default SignupPage;
