import { assets } from '@/assets';
import { Typography } from 'antd';
import Image from 'next/image';
import styles from './index.module.scss';

const { Title } = Typography;

type AuthFormHeaderProps = {
  title?: string;
};

const AuthFormHeader = ({ title }: AuthFormHeaderProps) => {
  return (
    <div className={styles.formHeader}>
      {title && <Title className={styles.formTitle}>{title}</Title>}
      <div className={styles.logoExpanded}>
        <Image
          src={assets.logoIcon.src}
          alt={assets.logoIcon.alt}
          width={32}
          height={32}
          priority
        />
        <Title level={4} className={styles.logoTitle}>
          Workify
        </Title>
      </div>
    </div>
  );
};

export default AuthFormHeader;
