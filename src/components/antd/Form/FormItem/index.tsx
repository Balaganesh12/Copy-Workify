import { Form, FormItemProps } from 'antd';
import styles from './index.module.scss';
const AntdFormItem = (props: FormItemProps) => {
  const { label, rules, hasFeedback, ...restProps } = props;

  const computedRules = rules ?? [
    {
      required: true,
      message: `${label} is verplicht`,
    },
  ];

  return (
    <Form.Item
      {...restProps}
      label={label}
      hasFeedback={hasFeedback !== false}
      validateDebounce={1000}
      validateFirst
      rules={computedRules}
      className={styles.formItem}
    />
  );
};

export default AntdFormItem;
