import { assets } from '@/assets';
import AntdButton from '@/components/antd/Button';
import Image from 'next/image';
import React from 'react';
import styles from './index.module.scss';

interface SelectionHeaderProps {
  selectedCount?: number;
  totalCount?: number;
  onDeselectAll?: () => void;
  onDelete?: () => void;
}

const SelectionHeader: React.FC<SelectionHeaderProps> = ({
  selectedCount = 3,
  totalCount = 128,
  onDeselectAll = () => {},
  onDelete = () => {},
}) => {
  if (selectedCount === 0) return null;

  return (
    <div className={styles.tableSelectionContainer}>
      <div className={styles.leftSection}>
        <div className={styles.selectionText}>
          {selectedCount} van {totalCount} geselecteerd
        </div>
        <AntdButton
          rootClassName={styles.deselectButton}
          shape="round"
          variant="text"
          onClick={onDeselectAll}
          type="text"
        >
          Deselecteer alles
        </AntdButton>
      </div>
      <div className={styles.rightSection}>
        <AntdButton
          className={styles.deselectButton}
          onClick={onDelete}
          shape="round"
          danger
        >
          <Image
            src={assets.DeleteIcon.src}
            alt={assets.DeleteIcon.alt}
            width={16}
            height={16}
          />
          Verwijderen
        </AntdButton>
      </div>
    </div>
  );
};

export default SelectionHeader;
