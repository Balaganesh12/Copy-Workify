'use client';

import { useState } from 'react';
// External Libraries
import { Form } from 'antd';
// Components
import AntdForm from '@/components/antd/Form';
import AntdSpace from '@/components/antd/Space';
// Constants
import { OnboardingFormValues } from '@/constants/forms/onboarding';
// Hooks
// Styles
import styles from './index.module.scss';
// Components
import AntdFormSubmit from '@/components/ui/Common/FormSubmit';
// Steps
import AntdButton from '@/components/antd/Button';
import CustomFlex from '@/components/ui/Common/Flex';
import OnboardingFormHeader from './Header';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
// Update the type to use the new OnboardingFormValues
import { useMessage } from '@/components/antd/Notification';
import { ERROR_MESSAGE } from '@/constants/messages';
import { useUser } from '@/contexts/User';
import { updateUserProfile } from '@/services/user';
import { useAppRouter } from '@/utils/routes';
type FormValues = OnboardingFormValues;

// Constants
const FORM_PROPS = {
  name: 'onboarding',
  layout: 'vertical' as const,
  autoComplete: 'on',
  size: 'large' as const,
  initialValues: {
    remember: true,
  },
};

const OnboardingForm = () => {
  const { reload } = useAppRouter();
  const { showMessage } = useMessage();
  const { userProfile } = useUser();
  const [step, setStep] = useState(1);
  const [form] = Form.useForm<FormValues>();
  const [loading, setLoading] = useState(false);

  const onFinish = async () => {
    if (!userProfile?.id)
      return showMessage('error', ERROR_MESSAGE.USER.UPDATE_USER_PROFILE_ERROR);

    setLoading(true);

    const value = form.getFieldsValue(true);
    delete value.remember;
    value.is_onboarded = true;
    const { success, message, error } = await updateUserProfile(
      userProfile.id,
      value,
    );

    if (error) {
      showMessage('error', ERROR_MESSAGE.USER.UPDATE_USER_PROFILE_ERROR);
    }

    if (success) {
      showMessage('success', message);
      reload();
    }

    setLoading(false);
  };

  const stepComponents = [
    {
      key: 1,
      title: 'Vertel ons over jezelf',
      description:
        'Om je account in te stellen, vragen we je om je contactgegevens. Deze informatie wordt veilig en privé bewaard.',
      component: <Step1 />,
    },
    {
      key: 2,
      title: 'Vertel ons over je bedrijf',
      description:
        'Help ons je ervaring te personaliseren door je bedrijfsgegevens te delen. Hiermee kunnen we functies op maat aanbieden.  ',
      component: <Step2 />,
    },
    {
      key: 3,
      title: 'Hoe heb je Workify leren kennen?',
      description:
        'Je feedback helpt ons onze marketing te verbeteren en meer bedrijven zoals dat van jou te bereiken.',
      component: <Step3 />,
    },
  ];

  const nextStep = () => {
    if (step < stepComponents.length) {
      setStep(step + 1);
    } else {
      form.submit();
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className={styles.onboardingFormContainer}>
      <OnboardingFormHeader
        step={step}
        title={stepComponents[step - 1].title}
        description={stepComponents[step - 1].description}
      />

      <AntdForm {...FORM_PROPS} form={form} onFinish={onFinish}>
        <AntdSpace direction="vertical" size={32}>
          {stepComponents[step - 1].component}
        </AntdSpace>
      </AntdForm>

      <CustomFlex gap={16}>
        {step > 1 && (
          <AntdButton
            variant="outlined"
            size="large"
            className={styles.FormButton + ' ' + styles.FormButtonPrevious}
            onClick={previousStep}
          >
            Vorige
          </AntdButton>
        )}

        <AntdFormSubmit
          className={styles.FormButton}
          size="large"
          loading={loading}
          form={form}
          onClick={nextStep}
        >
          Volgende
        </AntdFormSubmit>
      </CustomFlex>
    </div>
  );
};

export default OnboardingForm;
