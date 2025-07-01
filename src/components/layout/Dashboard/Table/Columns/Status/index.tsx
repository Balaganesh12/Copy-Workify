import { ClientDataType } from '@/section/Private/Client/types';
import { Badge } from 'antd';
import styles from './index.module.scss';

const StatusColumn = (
  STATUS_STYLES: Record<string, { color: string; backgroundColor: string }>,
) => {
  return {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: '176px',
    sorter: (a: ClientDataType, b: ClientDataType) =>
      a.status.text.localeCompare(b.status.text),
    render: (status: { text: string }) => {
      const style = STATUS_STYLES[status.text] || {
        color: '#000',
        backgroundColor: '#eee',
      };

      return (
        <div
          className={styles.statusTag}
          style={{ backgroundColor: style.backgroundColor }}
        >
          <Badge color={style.color} className={styles.badge} />
          <span className={styles.text} style={{ color: style.color }}>
            {status.text}
          </span>
        </div>
      );
    },
  };
};

export default StatusColumn;
