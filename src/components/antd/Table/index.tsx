import { Checkbox, RowProps, Table, TableProps } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { HTMLAttributes, ReactNode } from 'react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import AntdButton from '../Button';
import EmptyTable from './EmptyTable';
import Header from './Header';
import { FilterDropDownProps } from './Header/FilterDropDown/types';
import styles from './index.module.scss';
import AntdTablePagination from './Pagination';
import SelectionHeader from './SelectionHeader';
import SortableTitle from './SortableTitle';
import Title from './Title';

type HeaderCellProps = HTMLAttributes<HTMLTableCellElement> & {
  children?: ReactNode;
};

type AntdTableProps<T extends { id: string | number }> = TableProps<T> & {
  dataSource: T[];
  enableRowSelector?: boolean;
  filterDropDowns: FilterDropDownProps[];
};

const AntdTable = <T extends { id: string | number }>({
  className,
  columns = [],
  onChange,
  dataSource,
  enableRowSelector = true,
  filterDropDowns,
  ...restProps
}: AntdTableProps<T>) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>(
    [],
  );
  const [searchValue, setSearchValue] = useState('');

  const [sortOrderMap, setSortOrderMap] = useState<
    Record<string, 'ascend' | 'descend' | null | undefined>
  >({});
  const [filtersState, setFiltersState] = useState<Record<string, string[]>>(
    {},
  );

  const enhancedColumns: ColumnsType<T> = columns.map((col: ColumnType<T>) => {
    if (col.sorter && col.dataIndex) {
      const key = String(col.dataIndex);
      return {
        ...col,
        title: (
          <SortableTitle
            title={typeof col.title === 'string' ? col.title : 'Title'}
            sortedOrder={sortOrderMap[key]}
          />
        ),
      };
    }
    return col;
  });

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: dataSource.length,
  });

  const handleChange: TableProps<T>['onChange'] = (
    pagination,
    filters,
    sorter,
    extra,
  ) => {
    const newSortOrderMap: Record<
      string,
      'ascend' | 'descend' | null | undefined
    > = {};

    if (Array.isArray(sorter)) {
      sorter.forEach((s) => {
        if (s && typeof s.column?.dataIndex === 'string') {
          newSortOrderMap[s.column.dataIndex] = s.order;
        }
      });
    } else if (sorter && typeof sorter.column?.dataIndex === 'string') {
      newSortOrderMap[sorter.column.dataIndex] = sorter.order;
    }

    setSortOrderMap(newSortOrderMap);

    if (onChange) onChange(pagination, filters, sorter, extra);
  };

  const handlePageChange = (page: number, pageSize: number) => {
    const start = (page - 1) * pageSize;
    const newPaginatedData = dataSource.slice(start, start + pageSize);

    setPagination((prev) => ({
      ...prev,
      current: page,
      pageSize,
    }));

    if (onChange) {
      onChange(
        { current: page, pageSize, total: dataSource.length },
        {},
        {},
        { action: 'paginate', currentDataSource: newPaginatedData },
      );
    }
  };

  const totalPages = Math.ceil(pagination.total / pagination.pageSize);

  const handleSelect = useCallback((record: T, selected: boolean) => {
    const key = record.id;
    setSelectedRowKeys((prev) =>
      selected ? [...prev, key] : prev.filter((k) => k !== key),
    );
  }, []);

  const toggleSelectAll = useCallback(() => {
    setSelectedRowKeys((prev) =>
      prev.length === dataSource.length ? [] : dataSource.map((r) => r.id),
    );
  }, [dataSource]);

  const handleRemove = useCallback(() => {
    setSelectedRowKeys([]);
  }, []);

  const filteredData = useMemo(() => {
    return dataSource.filter((row) => {
      // Search
      const searchMatch =
        !searchValue ||
        Object.values(row).some(
          (val) =>
            typeof val === 'string' &&
            val.toLowerCase().includes(searchValue.toLowerCase()),
        );

      // Filters
      const filtersMatch = Object.entries(filtersState).every(
        ([key, values]) => {
          if (!values.length) return true;

          const val = row[key as keyof typeof row];

          if (typeof val === 'string') {
            return values.includes(val);
          }

          if (
            typeof val === 'object' &&
            val !== null &&
            'type' in val &&
            typeof (val as { type: string }).type === 'string'
          ) {
            return values.includes((val as { type: string }).type);
          }

          if (Array.isArray(val)) {
            return val.some((item) => values.includes(item));
          }

          return false;
        },
      );

      return searchMatch && filtersMatch;
    });
  }, [dataSource, searchValue, filtersState]);

  const headerCheckbox = React.useMemo(() => {
    const isDisabled = filteredData.length === 0;

    return (
      <Checkbox
        disabled={isDisabled}
        checked={!isDisabled && selectedRowKeys.length === filteredData.length}
        indeterminate={
          !isDisabled &&
          selectedRowKeys.length > 0 &&
          selectedRowKeys.length < filteredData.length
        }
        onChange={toggleSelectAll}
      />
    );
  }, [selectedRowKeys, filteredData, toggleSelectAll]);

  const handleSearch = (value: string) => {
    setSearchValue(value);
    setPagination((prev) => ({
      ...prev,
      current: 1, // Reset to first page on search
    }));
  };

  const rowSelection = React.useMemo<TableProps<T>['rowSelection']>(() => {
    return enableRowSelector
      ? {
          selectedRowKeys,
          type: 'checkbox',
          onSelect: handleSelect,
          columnTitle: headerCheckbox,
        }
      : undefined;
  }, [enableRowSelector, selectedRowKeys, handleSelect, headerCheckbox]);

  // Paginate filtered data
  const paginatedData = React.useMemo(() => {
    const start = (pagination.current - 1) * pagination.pageSize;
    return filteredData.slice(start, start + pagination.pageSize);
  }, [pagination, filteredData]);

  const getFilterDropDownProps = (): FilterDropDownProps[] =>
    filterDropDowns.map((fd) => ({
      ...fd,
      value: filtersState[fd.filterKey] || [],
      onChange: (values: string[]) =>
        setFiltersState((prev) => ({ ...prev, [fd.filterKey]: values })),
    }));

  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      total: filteredData.length,
    }));
  }, [filteredData.length]);

  useEffect(() => {
    const initialFilters: Record<string, string[]> = {};
    filterDropDowns.forEach((fd) => {
      initialFilters[fd.filterKey] = [];
    });
    setFiltersState(initialFilters);
  }, [filterDropDowns]);

  useEffect(() => {
    setSelectedRowKeys([]);
  }, [searchValue, filtersState, dataSource]);

  return (
    <div className={styles.antdTable}>
      <Title totalCount={filteredData.length} isFiltered={!!searchValue} />
      <Header
        searchValue={searchValue}
        onSearch={handleSearch}
        filterDropDowns={getFilterDropDownProps()}
      />
      <SelectionHeader
        selectedCount={selectedRowKeys.length}
        totalCount={filteredData.length}
        onDeselectAll={handleRemove}
      />
      <div className={styles.tableContainer}>
        <Table<T>
          rowKey="id"
          rowSelection={rowSelection}
          locale={{
            emptyText: <EmptyTable searchTerm={searchValue} />,
          }}
          size="middle"
          {...restProps}
          columns={enhancedColumns}
          onChange={handleChange}
          dataSource={paginatedData}
          style={{ minHeight: '232px' }}
          scroll={{ scrollToFirstRowOnChange: true }}
          components={{
            header: {
              cell: (headerCellProps: HeaderCellProps) => (
                <th {...headerCellProps} className={styles.headerCell} />
              ),
            },
            body: {
              row: (rowProps: RowProps) => (
                <tr {...rowProps} className={styles.row} />
              ),
            },
          }}
          className={`${styles.table} ${className || ''}`}
          pagination={false}
        />
        {filteredData.length > 0 && (
          <div className={styles.footer}>
            <AntdButton
              disabled={pagination.current === 1}
              shape="round"
              className={styles.footerButton}
              onClick={() => handlePageChange(1, pagination.pageSize)}
            >
              Eerste
            </AntdButton>

            <AntdTablePagination
              current={pagination.current}
              total={pagination.total}
              pageSize={pagination.pageSize}
              onChange={handlePageChange}
            />

            <AntdButton
              disabled={pagination.current === totalPages}
              shape="round"
              className={styles.footerButton}
              onClick={() => handlePageChange(totalPages, pagination.pageSize)}
            >
              Laatste
            </AntdButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(AntdTable);
