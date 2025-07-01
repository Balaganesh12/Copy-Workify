import { FormInstance } from 'antd/es/form';

export interface FormProps {
  children: React.ReactNode;
  name: string;
  backRoute: string;
  contentWidth?: string;
  initialValues?: {
    [key: string]: string | number | boolean;
  };
  form: FormInstance;
}

export type FormValues = {
  name: string;
  email: string;
  phone: string;
};
