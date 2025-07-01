import AntdButton from '@/components/antd/Button';
import { type ButtonProps } from 'antd';
import React from 'react';
import styles from './index.module.scss';
interface AntdFormSubmitProps extends Omit<ButtonProps, 'form'> {
  submittable: boolean;
}

const AntdPageFormSubmit: React.FC<
  React.PropsWithChildren<AntdFormSubmitProps>
> = ({ submittable, ...props }) => {
  return (
    <div className={styles.actionButtons}>
      <AntdButton
        color="primary"
        variant="outlined"
        htmlType="submit"
        disabled={!submittable}
        shape="round"
      >
        Opslaan & Nieuwe Toevoegen
      </AntdButton>
      <AntdButton
        {...props}
        type="primary"
        htmlType="submit"
        disabled={!submittable}
        shape="round"
      >
        Opslaan
      </AntdButton>
    </div>
  );
};

export default AntdPageFormSubmit;
