import AntdFormItem from '@/components/antd/Form/FormItem';
import AntdInput from '@/components/antd/Input';
import { confirmPasswordValidationRules } from '@/utils/validations/auth';

type ConfirmPasswordFormItemProps = {
  name: string;
  label?: string;
  placeholder?: string;
};

const ConfirmPasswordFormItem = ({
  name,
  label = 'Bevestig je nieuwe wachtwoord',
  placeholder = 'Voer je nieuwe wachtwoord nogmaals in',
}: ConfirmPasswordFormItemProps) => {
  return (
    <AntdFormItem
      label={label}
      name={name}
      dependencies={['password']}
      rules={confirmPasswordValidationRules}
    >
      <AntdInput.Password placeholder={placeholder} />
    </AntdFormItem>
  );
};

export default ConfirmPasswordFormItem;
