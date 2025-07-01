import AntdSelect from '@/components/antd/Select/Multiple';
import React from 'react';
import { FilterDropDownPropsWithOptional } from './types';
import DotIcon from './DotIcon';

const FilterDropDown: React.FC<FilterDropDownPropsWithOptional> = ({
  options,
  placeholder,
  placeholderWidth,
  value,
  onChange,
}) => {
  return (
    <AntdSelect
      placeholder={placeholder}
      rounded
      options={options.map((item) => ({
        value: item.value,
        label: item.label,
        icon: <DotIcon color={item.badge?.textColor} />,
        textColor: item.badge?.textColor,
      }))}
      value={value}
      onChange={(values) => onChange?.(values)}
      maxTagPlaceholder={placeholder}
      style={{ minWidth: placeholderWidth }}
    />
  );
};

export default FilterDropDown;
