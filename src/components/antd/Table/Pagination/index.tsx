import AntdPagination from '../../Pagination';

const AntdTablePagination = ({
  current,
  total,
  pageSize,
  onChange,
}: {
  current: number;
  total: number;
  pageSize: number;
  onChange: (page: number, pageSize: number) => void;
}) => (
  <AntdPagination
    current={current}
    total={total}
    pageSize={pageSize}
    onChange={onChange}
  />
);

export default AntdTablePagination;
