import { assets } from '@/assets';
import AntdButton from '@/components/antd/Button';
import AntdDateRangePicker from '@/components/antd/DateRangePicker';
import AntdSegmented from '@/components/antd/Segmented';
import AntdTypography from '@/components/antd/Typography';
import Image from 'next/image';
import styles from './index.module.scss';

const options = [
  { label: '30 dagen', value: '30d' },
  { label: '3 maanden', value: '3m' },
  { label: '6 maanden', value: '6m' },
  { label: 'Dit jaar', value: 'year' },
  { label: '12 maanden', value: '12m', disabled: true },
];

const Header = () => {
  return (
    <div className={styles.overviewHeader}>
      <div className={styles.overviewHeaderLeft}>
        <AntdSegmented options={options} size="large" block={false} />
        <AntdDateRangePicker />
      </div>
      <div className={styles.overviewHeaderRight}>
        <AntdButton type="text">
          <Image
            src={assets.ComparePeriod.src}
            alt={assets.ComparePeriod.alt}
            width={20}
            height={20}
          />
          <AntdTypography.Text className={styles.comparePeriodText}>
            Vergeleken met vorige periode
          </AntdTypography.Text>
        </AntdButton>
      </div>
    </div>
  );
};

export default Header;
