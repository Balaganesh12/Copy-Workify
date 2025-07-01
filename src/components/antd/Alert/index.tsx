import { Alert, AlertProps } from 'antd';
import Error from './Error';

const AntdAlert = (props: AlertProps) => {
  if (props.type === 'error') {
    return <Error {...props} />;
  }
  return <Alert {...props} />;
};

export default AntdAlert;
