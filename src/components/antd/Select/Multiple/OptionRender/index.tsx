import AntdCheckbox from '@/components/antd/Checkbox';
import { CheckboxChangeEvent } from 'antd';
import React from 'react';
import styles from './index.module.scss';

interface TransferListItemProps {
  label: string | React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  icon?: React.ReactNode;
  textColor?: string;
}

const TransferListItem: React.FC<TransferListItemProps> = ({
  label = '',
  checked = false,
  icon,
  onChange,
  textColor,
}) => {
  const color = textColor ? { color: textColor } : {};
  const handleChange = (e: CheckboxChangeEvent) => {
    onChange?.(e.target.checked);
  };

  return (
    <div className={styles.transferListItem}>
      <div className={styles.checkboxContainer}>
        <AntdCheckbox
          checked={checked}
          onChange={handleChange}
          className={styles.checkbox}
        >
          <div className={styles.checkboxIconContainer}>
            {icon}
            <span className={styles.label} style={color}>
              {label}
            </span>
          </div>
        </AntdCheckbox>
      </div>
    </div>
  );
};

export default TransferListItem;
