import { assets } from '@/assets';
import AntdInput from '@/components/antd/Input';
import Image from 'next/image';
import React from 'react';
import styles from './index.module.scss';

interface SearchInputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onKeyDown,
}) => {
  return (
    <AntdInput
      placeholder="Zoek klanten"
      className={styles.searchInput}
      prefix={
        <Image
          width={14}
          height={14}
          src={assets.SearchOutlineIcon.src}
          alt={assets.SearchOutlineIcon.alt}
        />
      }
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default SearchInput;
