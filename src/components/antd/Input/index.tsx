import { Input, InputProps } from 'antd';

const AntdInput = (props: InputProps) => <Input {...props} />;
AntdInput.Password = Input.Password;

export default AntdInput;
