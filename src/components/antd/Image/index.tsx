import { Image, ImageProps } from 'antd';

const AntdImage = (props: ImageProps) => (
  <Image {...props} alt={props.alt ?? ''} />
);

export default AntdImage;
