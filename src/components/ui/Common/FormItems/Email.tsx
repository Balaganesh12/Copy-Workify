import AntdFormItem from '@/components/antd/Form/FormItem';
import AntdInput from '@/components/antd/Input';
import { emailRules } from '@/utils/validations/auth';

type EmailFormItemProps = {
  name: string;
  label?: string;
  hasFeedback?: boolean;
  autoComplete?: string;
  placeholder?: string;
  tooltip?: string;
  style?: React.CSSProperties;
};

const EmailFormItem = ({
  name,
  label = 'E-mailadres',
  hasFeedback = true,
  autoComplete = 'off',
  placeholder = 'Voer je e-mailadres in',
  tooltip,
  style,
}: EmailFormItemProps) => {
  return (
    <AntdFormItem
      label={label}
      name={name}
      rules={emailRules}
      hasFeedback={hasFeedback}
      tooltip={tooltip}
      style={style}
    >
      <AntdInput placeholder={placeholder} autoComplete={autoComplete} />
    </AntdFormItem>
  );
};

export default EmailFormItem;
