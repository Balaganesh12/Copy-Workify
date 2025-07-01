import { Select, SelectProps } from 'antd';
import { useState } from 'react';
import ChevronSuffixIcon from '../Components/SuffixIcon';
import styles from './index.module.scss'; // SCSS/CSS Module
import CustomOptionRender from './OptionRender';

interface AntdSelectProps extends SelectProps {
  rounded?: boolean;
}

const AntdSelect = ({ rounded = false, ...props }: AntdSelectProps) => {
  const [open, setOpen] = useState(false);
  const selectedValue = props.value;
  const variant = props.variant;

  const selectElement = (
    <Select
      {...props}
      open={props.open !== undefined ? props.open : open}
      onOpenChange={(visible) => {
        setOpen(visible);
        props.onOpenChange?.(visible);
      }}
      optionRender={(option) =>
        CustomOptionRender({
          option: option as { label: string; value: string },
          selectedValue,
        })
      }
      suffixIcon={<ChevronSuffixIcon open={open} />}
      variant={variant ?? (rounded ? 'borderless' : 'outlined')}
    />
  );

  if (rounded) {
    return <div className={styles.roundedWrapper}>{selectElement}</div>;
  }

  return selectElement;
};

export default AntdSelect;
