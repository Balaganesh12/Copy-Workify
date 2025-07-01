import AntdFormItem from '@/components/antd/Form/FormItem';
import AntdInput from '@/components/antd/Input';
import { onboardingFormItems } from '@/constants/forms/onboarding';
import {
  phoneNumberRequiredRule,
  phoneNumberValidationRules,
} from '@/utils/validations/auth';

type PhoneNumberFormItemProps = {
  required?: boolean;
};

const PhoneNumberFormItem = ({
  required = false,
}: PhoneNumberFormItemProps) => {
  const label = required
    ? onboardingFormItems.phone.label
    : `${onboardingFormItems.phone.label} ${onboardingFormItems.phone.optionalLabel}`;

  const rules = required ? phoneNumberRequiredRule : phoneNumberValidationRules;

  return (
    <AntdFormItem
      name={onboardingFormItems.phone.name}
      label={label}
      rules={rules}
      hasFeedback={false}
    >
      <AntdInput placeholder="Voer je telefoonnummer in" maxLength={12} />
    </AntdFormItem>
  );
};

export default PhoneNumberFormItem;
