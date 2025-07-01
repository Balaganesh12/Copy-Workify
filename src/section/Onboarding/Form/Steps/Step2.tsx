import React from 'react';

import AntdFormItem from '@/components/antd/Form/FormItem';
import AntdInput from '@/components/antd/Input';
import AntdSelect from '@/components/antd/Select/Single';
import {
  CompanySizeOptions,
  IndustryOptions,
  onboardingFormItems,
} from '@/constants/forms/onboarding';
import { urlRules } from '@/utils/validations';
const Step1 = () => {
  return (
    <React.Fragment>
      <AntdFormItem
        name={onboardingFormItems.companyName.name}
        label={onboardingFormItems.companyName.label}
        required
        hasFeedback={false}
      >
        <AntdInput placeholder={onboardingFormItems.companyName.placeholder} />
      </AntdFormItem>

      <AntdFormItem
        name={onboardingFormItems.industry.name}
        label={onboardingFormItems.industry.label}
        required
        hasFeedback={false}
      >
        <AntdSelect
          placeholder={onboardingFormItems.industry.placeholder}
          options={IndustryOptions}
        />
      </AntdFormItem>

      <AntdFormItem
        name={onboardingFormItems.companySize.name}
        label={onboardingFormItems.companySize.label}
        required
        hasFeedback={false}
      >
        <AntdSelect
          placeholder={onboardingFormItems.companySize.placeholder}
          options={CompanySizeOptions}
        />
      </AntdFormItem>

      <AntdFormItem
        name={onboardingFormItems.companyWebsite.name}
        label={onboardingFormItems.companyWebsite.label}
        hasFeedback={false}
        rules={urlRules}
      >
        <AntdInput
          placeholder={onboardingFormItems.companyWebsite.placeholder}
        />
      </AntdFormItem>
    </React.Fragment>
  );
};

export default Step1;
