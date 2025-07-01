import AntdFormItem from '@/components/antd/Form/FormItem';
import AntdSelect from '@/components/antd/Select/Single';
import {
  ReferralOptions,
  onboardingFormItems,
} from '@/constants/forms/onboarding';

const Step1 = () => {
  return (
    <AntdFormItem
      name={onboardingFormItems.referral.name}
      label={onboardingFormItems.referral.label}
      required
      hasFeedback={false}
    >
      <AntdSelect
        placeholder={onboardingFormItems.referral.placeholder}
        options={ReferralOptions}
      />
    </AntdFormItem>
  );
};

export default Step1;
