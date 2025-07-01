import { Space, SpaceProps } from 'antd';

// Styles
import styles from './index.module.scss';

const AntdSpace = (props: SpaceProps) => (
  <Space className={styles.space} {...props} />
);

export default AntdSpace;
