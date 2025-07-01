'use client';

import styles from './index.module.scss';

import CancelButton from '../Header/Buttons/Cancel';
import AntdPageFormSubmit from './Buttons';

interface FormFooterProps {
  submittable: boolean;
  handleBack: () => void;
}

const FormFooter = ({ submittable, handleBack }: FormFooterProps) => {
  return (
    <div className={styles.footer}>
      <CancelButton handleBack={handleBack} />
      <AntdPageFormSubmit submittable={submittable} />
    </div>
  );
};

export default FormFooter;
