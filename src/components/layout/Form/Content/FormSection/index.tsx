import AntdTypography from '@/components/antd/Typography';
import Image from 'next/image';
import FormSectionProps from '../types';
import styles from './index.module.scss';

const FormSection = ({ children, title, titleIcon }: FormSectionProps) => {
  return (
    <div className={styles.formSection}>
      {title && (
        <div className={styles.formSectionHeader}>
          {titleIcon && (
            <Image
              src={titleIcon.src}
              alt={titleIcon.alt}
              width={24}
              height={24}
            />
          )}
          {title && (
            <AntdTypography.Title className={styles.formSectionTitle}>
              {title}
            </AntdTypography.Title>
          )}
        </div>
      )}
      <div className={styles.formSectionContent}>{children}</div>
    </div>
  );
};

export default FormSection;
