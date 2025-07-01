import AntdTypography from '@/components/antd/Typography';
import UserAvatar from '@/components/ui/Private/UserAvatar';
import { ClientDataType } from '@/section/Private/Client/types';
import styles from './index.module.scss';

const ClientColumn = {
  title: 'Naam',
  dataIndex: 'name',
  key: 'name',
  sorter: (a: ClientDataType, b: ClientDataType) =>
    `${a.firstName} ${a.lastName}`.localeCompare(
      `${b.firstName} ${b.lastName}`,
    ),
  render: (_: string, record: ClientDataType) => (
    <div className={styles.client}>
      <UserAvatar
        size={40}
        firstName={record.firstName}
        lastName={record.lastName}
        fontSize={16}
        lineHeight={22}
      />
      <div className={styles.name}>
        <AntdTypography.Text className={styles.clientName}>
          {record.firstName} {record.lastName}
        </AntdTypography.Text>
        <span className={styles.company}>{record.company}</span>
      </div>
    </div>
  ),
  width: '264px',
};

export default ClientColumn;
