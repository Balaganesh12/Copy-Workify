import { FilterDropDownProps } from '@/components/antd/Table/Header/FilterDropDown/types';
import { ClientDataType } from '../../types';
import { STATUS_STYLES } from '../constant';

const TableFilters = (dataSource: ClientDataType[]): FilterDropDownProps[] => [
  {
    label: 'Status',
    filterKey: 'status',
    options: dataSource.map((item) => ({
      label: item.status.text,
      value: item.status.text.toLowerCase(),
      badge: {
        textColor: STATUS_STYLES[item.status.text].color,
        backgroundColor: STATUS_STYLES[item.status.text].backgroundColor,
      },
    })),
    placeholder: 'Status',
    placeholderWidth: '90px',
  },
];

export default TableFilters;
