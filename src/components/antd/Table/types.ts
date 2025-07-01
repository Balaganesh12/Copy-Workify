import type { ColumnsType } from 'antd/es/table';
import type { FilterDropDownProps } from './Header/FilterDropDown/types';

export type DashboardTableProps<T extends { id: string | number }> = {
  columns: ColumnsType<T>;
  dataSource: T[];
  enableRowSelector?: boolean;
  filterDropDowns: FilterDropDownProps[];
};
