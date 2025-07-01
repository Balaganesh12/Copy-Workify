import AntdFormItem from '@/components/antd/Form/FormItem';
import AntdInput from '@/components/antd/Input';
import { onboardingFormItems } from '@/constants/forms/onboarding';
import { phoneNumberValidationRules } from '@/utils/validations/auth';
import { Select } from 'antd';
import { useState } from 'react';
import CustomFlex from '../Flex';

const { Option } = Select;

interface PhoneNumberFormItemProps {
  withCountryCodeSelector?: boolean;
}

const PhoneNumberFormItem = ({
  withCountryCodeSelector = false,
}: PhoneNumberFormItemProps) => {
  const [phoneCountryCode, setPhoneCountryCode] = useState('+31');

  const handleCountryCodeChange = (value: string) => {
    setPhoneCountryCode(value);
  };

  return (
    <AntdFormItem
      name={onboardingFormItems.phone.name}
      label={onboardingFormItems.phone.label}
      rules={phoneNumberValidationRules}
      hasFeedback={false}
    >
      <CustomFlex gap={8}>
        {withCountryCodeSelector && (
          <Select
            style={{ width: 100 }}
            value={phoneCountryCode}
            onChange={handleCountryCodeChange}
          >
            <Option value="+31">+31</Option>
          </Select>
        )}

        <AntdInput
          placeholder="Voer je telefoonnummer in"
          style={{ flex: 1 }}
          maxLength={12}
        />
      </CustomFlex>
    </AntdFormItem>
  );
};

export default PhoneNumberFormItem;
