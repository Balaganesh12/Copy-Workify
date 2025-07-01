import AntdTable from '@/components/antd/Table';
import { DashboardTableProps } from '@/components/antd/Table/types';
import { ColumnsType } from 'antd/es/table';

const DashboardTable = <T extends { id: string | number }>({
  dataSource,
  enableRowSelector = true,
  columns,
  filterDropDowns,
}: DashboardTableProps<T>) => {
  return (
    <AntdTable
      enableRowSelector={enableRowSelector}
      dataSource={dataSource}
      columns={columns as ColumnsType<{ id: string | number }>}
      filterDropDowns={filterDropDowns}
    />
  );
};

export default DashboardTable;
