import AntdFormItem from '@/components/antd/Form/FormItem';
import AntdInput from '@/components/antd/Input';
import { passwordRequiredRule } from '@/utils/validations/auth';
import { Rule } from 'antd/es/form';

type PasswordFormItemProps = {
  name: string;
  hasFeedback?: boolean;
  label?: string;
  placeholder?: string;
  rules?: Rule[];
  autoComplete?: string;
};

const PasswordFormItem = ({
  name,
  hasFeedback = true,
  label = 'Wachtwoord',
  placeholder = 'Voer je wachtwoord in',
  rules = passwordRequiredRule,
  autoComplete = 'password',
}: PasswordFormItemProps) => {
  return (
    <AntdFormItem
      label={label}
      name={name}
      rules={rules}
      hasFeedback={hasFeedback}
    >
      <AntdInput.Password
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </AntdFormItem>
  );
};

export default PasswordFormItem;
