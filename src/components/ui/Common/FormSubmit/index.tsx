import { Button, Form, type ButtonProps, type FormInstance } from 'antd';
import React from 'react';

// Omit 'form' from ButtonProps to avoid conflict
interface AntdFormSubmitProps extends Omit<ButtonProps, 'form'> {
  form: FormInstance;
}

const AntdFormSubmit: React.FC<
  React.PropsWithChildren<AntdFormSubmitProps>
> = ({ form, children, ...props }) => {
  const [submittable, setSubmittable] = React.useState<boolean>(false);

  const values = Form.useWatch([], form);

  React.useEffect(() => {
    const checkValid = async () => {
      try {
        await form.validateFields({ validateOnly: true });
        setSubmittable(true);
      } catch {
        setSubmittable(false);
      }
    };

    checkValid();
  }, [values, form]);

  return (
    <Button
      {...props}
      type="primary"
      htmlType="submit"
      disabled={!submittable}
      block
    >
      {children}
    </Button>
  );
};

export default AntdFormSubmit;
