import { assets } from '@/assets';
import CustomFlex from '@/components/ui/Common/Flex';
import Image from 'next/image';
import styles from './index.module.scss';

interface Props {
  option: { label: string; value: string };
  selectedValue: string | string[];
}

const CustomOptionRender = ({ option, selectedValue }: Props) => {
  const isSelected = Array.isArray(selectedValue)
    ? selectedValue.includes(option.value)
    : selectedValue === option.value;

  return (
    <CustomFlex justify="space-between" align="center">
      <span className={styles.selectOptionLabel}>{option.label}</span>
      {isSelected && (
        <Image
          src={assets.check.CheckOutlined.src}
          alt={assets.check.CheckOutlined.alt}
          width={20}
          height={20}
        />
      )}
    </CustomFlex>
  );
};

export default CustomOptionRender;
