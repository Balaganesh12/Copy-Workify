// components/antd/Modal/index.tsx
import { CloseOutlined } from '@ant-design/icons';
import { Modal, ModalProps } from 'antd';
import React from 'react';
import styles from './index.module.scss';

interface AntdModalProps extends ModalProps {
  customCancel?: () => void;
}

const AntdModal: React.FC<AntdModalProps> = ({
  customCancel,
  title,
  ...rest
}) => {
  return (
    <Modal
      {...rest}
      title={
        <div className={styles.modalHeader}>
          <span>{title}</span>
          <CloseOutlined onClick={customCancel} className={styles.closeIcon} />
        </div>
      }
      closable={false}
    />
  );
};

export default AntdModal;
