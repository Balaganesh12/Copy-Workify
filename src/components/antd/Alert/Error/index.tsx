import { assets } from '@/assets';
import { Alert, AlertProps } from 'antd';
import Image from 'next/image';
import AntdTypography from '../../Typography';
import styles from './index.module.scss';

const AntdAlertError = (props: AlertProps) => {
  return (
    <Alert
      {...props}
      type="error"
      description=""
      message={
        <div className={styles.alertError}>
          <Image
            src={assets.Alert.src}
            alt={assets.Alert.alt}
            width={24}
            height={24}
            priority
          />
          <div className={styles.alertErrorText}>
            <AntdTypography.Text className={styles.alertErrorTextTitle}>
              {props.message}
            </AntdTypography.Text>
            <AntdTypography.Text className={styles.alertErrorTextDescription}>
              {props.description}
            </AntdTypography.Text>
          </div>
        </div>
      }
    />
  );
};

export default AntdAlertError;
