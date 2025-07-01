import React from 'react';

import AntdFormItem from '@/components/antd/Form/FormItem';
import AntdInput from '@/components/antd/Input';
import CustomFlex from '@/components/ui/Common/Flex';
import PhoneNumberFormItem from '@/components/ui/Common/FormItems/PhoneNumber';

import { onboardingFormItems } from '@/constants/forms/onboarding';

const Step1 = () => {
  return (
    <React.Fragment>
      <CustomFlex gap={8}>
        <AntdFormItem
          name={onboardingFormItems.firstName.name}
          label={onboardingFormItems.firstName.label}
          required
          hasFeedback={false}
        >
          <AntdInput placeholder={onboardingFormItems.firstName.placeholder} />
        </AntdFormItem>

        <AntdFormItem
          name={onboardingFormItems.lastName.name}
          label={onboardingFormItems.lastName.label}
          required
          hasFeedback={false}
        >
          <AntdInput placeholder={onboardingFormItems.lastName.placeholder} />
        </AntdFormItem>
      </CustomFlex>

      <PhoneNumberFormItem />
    </React.Fragment>
  );
};

export default Step1;
