import InlineFormProps from '../../types';
import styles from './index.module.scss';

const InlineForm = ({ children }: InlineFormProps) => {
  return <div className={styles.inlineForm}>{children}</div>;
};

export default InlineForm;
