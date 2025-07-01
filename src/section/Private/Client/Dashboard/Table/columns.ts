import TableColumns from '@/components/layout/Dashboard/Table/Columns';
import { ClientDataType } from '../../types';
import { STATUS_STYLES } from '../constant';

const columns = [
  TableColumns.ClientColumn,
  TableColumns.AddressColumn,
  {
    title: 'Lead bron',
    dataIndex: 'leadSource',
    key: 'leadSource',
    sorter: (a: ClientDataType, b: ClientDataType) =>
      a.leadSource.localeCompare(b.leadSource),
  },
  TableColumns.StatusColumn(STATUS_STYLES),
  TableColumns.LastActivity,
];

export default columns;
