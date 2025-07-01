import styles from './index.module.scss';
import FormContentProps from './types';

const FormContent = ({ children, contentWidth }: FormContentProps) => {
  return (
    <div className={styles.formContent} style={{ width: contentWidth }}>
      {children}
    </div>
  );
};
export default FormContent;
