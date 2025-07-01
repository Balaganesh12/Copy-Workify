import AntdButton from '@/components/antd/Button';
import { PlusOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import styles from './index.module.scss';
import Popover from './Popover';
import { DashboardHeaderProps } from './type';

const DashboardHeader = ({ dashboardHeader }: DashboardHeaderProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(dashboardHeader.createButton.href);
  };

  return (
    <div className={styles.dashboardHeader}>
      <div className={styles.dashboardHeaderLeft}></div>
      <div className={styles.dashboardHeaderRight}>
        <AntdButton
          type="primary"
          shape="round"
          icon={<PlusOutlined />}
          onClick={handleClick}
        >
          {dashboardHeader.createButton.label}
        </AntdButton>
        <Popover />
      </div>
    </div>
  );
};

export default DashboardHeader;
