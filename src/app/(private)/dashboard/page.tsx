'use client';

import AntdButton from '@/components/antd/Button';
import AntdCheckbox from '@/components/antd/Checkbox';
import AntdFlex from '@/components/antd/Flex';
import AntdInput from '@/components/antd/Input';
import {
  DownOutlined,
  MoreOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Badge, DatePicker, Segmented, Space, Typography } from 'antd';
import { FC, useState } from 'react';

const { Title } = Typography;

interface Assignee {
  name: string;
  avatar?: string;
  color?: string;
}

interface ScheduleItemType {
  id: number;
  status: 'Overdue' | 'Unscheduled' | 'Scheduled' | 'Completed';
  type: 'Visit' | 'Task' | 'Request';
  title: string;
  description: string;
  address: string;
  date?: string;
  completedOn?: string;
  assignedTo: Assignee[];
}

const scheduleItems: ScheduleItemType[] = [
  {
    id: 1,
    status: 'Overdue',
    type: 'Visit',
    title: 'Visit Title',
    description: 'Sjoerd van der Meer',
    address:
      'Amstelveenseweg 143, Unit 2.1 Amsterdam Noord-Holland, 1075 XV Ne...',
    date: '2022-01-11T09:00:00Z',
    assignedTo: [{ name: 'Luuk', avatar: 'LJ', color: '#ff7875' }],
  },
  {
    id: 2,
    status: 'Overdue',
    type: 'Task',
    title: 'Task Title',
    description: 'Annemieke de Vries',
    address:
      'Waagplein 8 Begane grond Alkmaar Noord-Holland 1811 JP Netherlands',
    date: '2022-01-14T14:00:00Z',
    assignedTo: [
      { name: 'Julia', avatar: 'JV', color: '#9254de' },
      { name: '& 1 other', avatar: 'K', color: '#ffc53d' },
    ],
  },
  {
    id: 3,
    status: 'Overdue',
    type: 'Request',
    title: 'Request Title',
    description: 'Femke Visser',
    address:
      'Stationsplein 89 3e verdieping Rotterdam Zuid-Holland 3013 AJ Netherlands',
    date: '2022-01-28T18:00:00Z',
    assignedTo: [{ name: 'No one' }],
  },
  {
    id: 4,
    status: 'Overdue',
    type: 'Visit',
    title: 'Visit Title',
    description: 'Joost de Boer',
    address: 'Domstraat 27 Kantoor 4B Utrecht Utrecht 3512 JC Netherlands',
    date: '2022-01-29T11:30:00Z',
    assignedTo: [
      { name: 'Emma', avatar: 'SB', color: '#ffc53d' },
      { name: '& 2 others', avatar: 'B', color: '#597ef7' },
      { name: '', avatar: 'H', color: '#73d13d' },
    ],
  },
  // ... more items for other statuses
];

const statusConfig: Record<
  ScheduleItemType['status'],
  { color: string; label: string }
> = {
  Overdue: { color: '#f5222d', label: 'Overdue' },
  Unscheduled: { color: '#fa8c16', label: 'Unscheduled' },
  Scheduled: { color: '#1890ff', label: 'Scheduled' },
  Completed: { color: '#52c41a', label: 'Completed' },
};

const typeConfig: Record<ScheduleItemType['type'], { color: string }> = {
  Visit: { color: '#52c41a' },
  Task: { color: '#1890ff' },
  Request: { color: '#fa8c16' },
};

// --- Table row for each schedule item ---
const ScheduleItemRow: FC<{ item: ScheduleItemType }> = ({ item }) => (
  <tr style={{ borderBottom: '1px solid #f0f0f0', height: 64 }}>
    <td style={{ width: 40, textAlign: 'center' }}>
      <AntdCheckbox />
    </td>
    <td style={{ minWidth: 180 }}>
      <div style={{ fontWeight: 600 }}>{item.title}</div>
      <div style={{ color: '#888', fontSize: 13 }}>{item.description}</div>
    </td>
    <td style={{ minWidth: 220, color: '#888', fontSize: 13 }}>
      {item.address}
    </td>
    <td style={{ width: 90 }}>
      <Badge
        color={typeConfig[item.type].color}
        text={item.type}
        style={{ fontWeight: 500 }}
      />
    </td>
    <td style={{ width: 110, textAlign: 'right' }}>
      {item.date && (
        <div>
          <div
            style={{
              color: item.status === 'Overdue' ? '#f5222d' : '#222',
              fontWeight: 500,
            }}
          >
            {new Date(item.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </div>
          <div
            style={{
              color: item.status === 'Overdue' ? '#f5222d' : '#222',
              fontWeight: 500,
            }}
          >
            {new Date(item.date).toLocaleTimeString('nl-NL', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
        </div>
      )}
    </td>
    <td style={{ minWidth: 180 }}>
      <AntdFlex align="center" gap="small">
        <Avatar.Group
          max={{
            count: 3,
            style: { color: '#f56a00', backgroundColor: '#fde3cf' },
          }}
        >
          {item.assignedTo.map((assignee, index) =>
            assignee.avatar ? (
              <Avatar
                key={index}
                style={{ backgroundColor: assignee.color, fontWeight: 600 }}
              >
                {assignee.avatar}
              </Avatar>
            ) : (
              <Avatar
                key={index}
                style={{ backgroundColor: '#f0f0f0', color: '#bfbfbf' }}
              >
                <UserOutlined />
              </Avatar>
            ),
          )}
        </Avatar.Group>
        <div style={{ marginLeft: 8 }}>
          <div style={{ color: '#888', fontSize: 12 }}>Assigned to</div>
          <div style={{ fontWeight: 600, fontSize: 14 }}>
            {item.assignedTo.map((a) => a.name).join(' ')}
          </div>
        </div>
      </AntdFlex>
    </td>
  </tr>
);

// --- Table group header row (collapsible) ---
const TableGroupHeader: FC<{
  status: ScheduleItemType['status'];
  count: number;
  open: boolean;
  onClick: () => void;
}> = ({ status, count, open, onClick }) => (
  <tr
    style={{
      background: '#fafbfc',
      height: 44,
      cursor: 'pointer',
      userSelect: 'none',
    }}
    onClick={onClick}
  >
    <td
      colSpan={6}
      style={{
        color: statusConfig[status].color,
        fontWeight: 700,
        fontSize: 16,
        border: 0,
        padding: '0 0 0 8px',
        position: 'relative',
      }}
    >
      <span>
        {statusConfig[status].label} ({count})
      </span>
      <span
        style={{
          position: 'absolute',
          right: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#bfbfbf',
          transition: 'transform 0.2s',
          display: 'inline-block',
        }}
      >
        <DownOutlined
          style={{
            fontSize: 16,
            verticalAlign: 'middle',
            transform: open ? 'rotate(0deg)' : 'rotate(180deg)',
            transition: 'transform 0.2s',
          }}
        />
      </span>
    </td>
  </tr>
);

// --- Main Planboard table layout ---
const Planboard = () => {
  const [activeFilters, setActiveFilters] = useState<
    Array<ScheduleItemType['status'] | 'All'>
  >(['All']);

  const [openGroups, setOpenGroups] = useState<
    Record<ScheduleItemType['status'], boolean>
  >({
    Overdue: true,
    Unscheduled: true,
    Scheduled: true,
    Completed: true,
  });

  const filters: (ScheduleItemType['status'] | 'All')[] = [
    'All',
    'Overdue',
    'Unscheduled',
    'Scheduled',
    'Completed',
  ];

  const handleFilterChange = (
    filter: ScheduleItemType['status'] | 'All',
    checked: boolean,
  ) => {
    if (filter === 'All') {
      setActiveFilters(checked ? ['All'] : []);
    } else {
      let newFilters = activeFilters.filter((f) => f !== 'All');
      if (checked) {
        newFilters.push(filter);
      } else {
        newFilters = newFilters.filter((f) => f !== filter);
      }
      setActiveFilters(newFilters.length > 0 ? newFilters : ['All']);
    }
  };

  const getFilteredItems = () => {
    if (activeFilters.includes('All')) return scheduleItems;
    return scheduleItems.filter((item) => activeFilters.includes(item.status));
  };

  const groupedItems = getFilteredItems().reduce(
    (acc, item) => {
      const { status } = item;
      if (!acc[status]) {
        acc[status] = [];
      }
      acc[status].push(item);
      return acc;
    },
    {} as Record<ScheduleItemType['status'], ScheduleItemType[]>,
  );

  const handleGroupToggle = (status: ScheduleItemType['status']) => {
    setOpenGroups((prev) => ({ ...prev, [status]: !prev[status] }));
  };

  return (
    <div style={{ padding: '1rem 2rem', minHeight: '100vh' }}>
      <AntdFlex
        justify="space-between"
        align="center"
        style={{ marginBottom: '1rem' }}
      >
        <Space>
          <Segmented
            options={['Month', 'Week', 'Day', 'Map', 'List']}
            defaultValue="List"
          />
          <DatePicker placeholder="Select date" />
          <AntdButton>Today</AntdButton>
        </Space>
        <Space>
          <AntdButton>Filters</AntdButton>
          <AntdButton icon={<MoreOutlined />} />
        </Space>
      </AntdFlex>

      <Title level={3} style={{ marginBottom: 0 }}>
        Schedule Items (All - {scheduleItems.length})
      </Title>

      <AntdFlex
        justify="space-between"
        align="center"
        style={{ margin: '1.2rem 0 1.5rem 0' }}
      >
        <AntdInput
          style={{ maxWidth: 300, borderRadius: 8 }}
          placeholder="Search an Item"
          prefix={<SearchOutlined />}
        />
        <Space>
          {filters.map((filter) => (
            <AntdCheckbox
              key={filter}
              checked={activeFilters.includes(filter)}
              onChange={(e) => handleFilterChange(filter, e.target.checked)}
              style={{ fontWeight: 500 }}
            >
              {filter === 'All' ? 'All' : statusConfig[filter]?.label}
            </AntdCheckbox>
          ))}
        </Space>
      </AntdFlex>

      {/* Render each group as its own table with border and radius */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        {(
          [
            'Overdue',
            'Unscheduled',
            'Scheduled',
            'Completed',
          ] as ScheduleItemType['status'][]
        ).map((status) => {
          const items = groupedItems[status] || [];
          if (items.length === 0) return null;
          return (
            <table
              key={status}
              style={{
                width: '100%',
                borderCollapse: 'separate',
                borderSpacing: 0,
                border: '1px solid #e8e8e8',
                borderRadius: 12,
                background: '#fff',
                overflow: 'hidden',
                marginBottom: 0,
              }}
            >
              <tbody>
                <TableGroupHeader
                  status={status}
                  count={items.length}
                  open={openGroups[status]}
                  onClick={() => handleGroupToggle(status)}
                />
                {openGroups[status] &&
                  items.map((item) => (
                    <ScheduleItemRow key={item.id} item={item} />
                  ))}
              </tbody>
            </table>
          );
        })}
      </div>
    </div>
  );
};

export default Planboard;
