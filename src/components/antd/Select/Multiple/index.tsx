import AntdTypography from '@/components/antd/Typography';
import SearchInput from '@/components/ui/Private/SearchInput';
import { Select, SelectProps } from 'antd';
import { useState } from 'react';
import ChevronSuffixIcon from '../Components/SuffixIcon';
import Count from './Count';
import styles from './index.module.scss';
import TransferListItem from './OptionRender';

interface AntdSelectProps extends SelectProps {
  rounded?: boolean;
  maxTagPlaceholder?: string;
  icon?: React.ReactNode;
}

const AntdSelect = ({
  rounded = false,
  maxTagPlaceholder = 'tag',
  icon,
  ...props
}: AntdSelectProps) => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const variant = props.variant;

  // Filter options based on searchValue
  const filteredOptions = Array.isArray(props.options)
    ? props.options.filter((option) =>
        option.label
          ?.toString()
          .toLowerCase()
          .includes(searchValue.toLowerCase()),
      )
    : props.options;

  const selectElement = (
    <Select
      {...props}
      options={filteredOptions}
      mode="multiple"
      suffixIcon={<ChevronSuffixIcon open={open} />}
      popupMatchSelectWidth={false}
      open={props.open !== undefined ? props.open : open}
      menuItemSelectedIcon={null}
      variant={variant ?? (rounded ? 'borderless' : 'outlined')}
      maxTagCount={0}
      showSearch={false}
      placeholder={props.placeholder ?? 'Select an option'}
      onOpenChange={(visible) => {
        setOpen(visible);
        props.onOpenChange?.(visible);
      }}
      optionRender={(option) => {
        const selectedValues = props.value || [];
        const isSelected = selectedValues.includes(option.value);

        const optionIcon = option.data?.icon ?? icon;

        return (
          <TransferListItem
            label={option.label}
            checked={isSelected}
            icon={optionIcon}
            textColor={option.data?.textColor}
          />
        );
      }}
      maxTagPlaceholder={(props) => {
        return (
          <span className={styles.maxTagPlaceholder}>
            {maxTagPlaceholder} <Count count={props.length} />
          </span>
        );
      }}
      onChange={(values, option) => {
        setSearchValue('');
        props.onChange?.(values, option);
      }}
      popupRender={(menu) => (
        <div className={styles.multipleSelectPopup}>
          <div className={styles.searchContainer}>
            <SearchInput
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                e.stopPropagation()
              }
            />
          </div>
          {filteredOptions && filteredOptions.length > 0 ? (
            <div>{menu}</div>
          ) : (
            <div className={styles.notFoundContent}>
              <AntdTypography.Text className={styles.notFoundText}>
                Geen zoekresultaten gevonden voor deze zoekopdracht.
              </AntdTypography.Text>
            </div>
          )}
        </div>
      )}
    />
  );

  if (rounded) {
    return <div className={styles.roundedWrapper}>{selectElement}</div>;
  }

  return selectElement;
};

export default AntdSelect;
