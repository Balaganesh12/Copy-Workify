import { Typography } from 'antd';
import type { TitleProps } from 'antd/es/typography/Title';

const { Title } = Typography;

const AntdTitle = ({ children, ...props }: TitleProps) => {
  return <Title {...props}>{children}</Title>;
};

export default AntdTitle;
