import { Form, FormProps } from 'antd';

// Styles
import styles from './index.module.scss';

const AntdForm = (props: FormProps) => {
  return (
    <Form
      {...props}
      requiredMark={false}
      scrollToFirstError={{ behavior: 'smooth', block: 'end', focus: true }}
      clearOnDestroy
      className={styles.form + ' ' + props.className}
    >
      {props.children as React.ReactNode}
    </Form>
  );
};

export default AntdForm;
