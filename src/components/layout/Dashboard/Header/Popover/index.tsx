import { assets } from '@/assets/index';
import AntdPopover from '@/components/antd/Popover';
import Image from 'next/image';
import Content from './Content';
import styles from './index.module.scss';

const Popover = () => {
  return (
    <AntdPopover content={<Content />} width={200} placement="bottomRight">
      <div className={styles.circle}>
        <Image
          src={assets.DotMenuIcon.src}
          alt={assets.DotMenuIcon.alt}
          width={18}
          height={4}
        />
      </div>
    </AntdPopover>
  );
};

export default Popover;
