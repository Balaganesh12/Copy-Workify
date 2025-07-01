'use client';

import styles from './index.module.scss';

import BackRouteButton from '@/components/ui/Private/BackRouteButton';
import AntdPageFormSubmit from './Buttons';

interface FormHeaderProps {
  submittable: boolean;
  handleBack: () => void;
}

const FormHeader = ({ submittable, handleBack }: FormHeaderProps) => {
  return (
    <div className={styles.header}>
      <BackRouteButton title="Nieuwe klant" handleBack={handleBack} />
      <AntdPageFormSubmit submittable={submittable} handleBack={handleBack} />
    </div>
  );
};

export default FormHeader;
