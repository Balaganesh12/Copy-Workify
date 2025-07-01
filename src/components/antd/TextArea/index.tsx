import { Input } from 'antd';
import type { TextAreaProps } from 'antd/es/input';

const { TextArea } = Input;

const AntdTextArea = ({ ...props }: TextAreaProps) => {
  return <TextArea rows={4} {...props} />;
};

export default AntdTextArea;
