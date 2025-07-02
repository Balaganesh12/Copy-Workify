'use client';

import { useUser } from '@/contexts/User';
import { usePathname } from 'next/navigation';

import { DownOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Checkbox, Flex, Input, Table } from 'antd';
import { FC, useState } from 'react';

function MiniChart() {
  // Placeholder for mini line chart
  return (
    <svg width="100%" height="32" viewBox="0 0 120 32">
      <polyline
        fill="none"
        stroke="#1ecb81"
        strokeWidth="2"
        points="0,25 10,20 20,22 30,15 40,18 50,10 60,12 70,8 80,14 90,10 100,6 110,12 120,8"
      />
      <polyline
        fill="none"
        stroke="#e0e0e0"
        strokeWidth="2"
        points="0,28 10,24 20,26 30,22 40,24 50,18 60,20 70,16 80,20 90,18 100,14 110,18 120,14"
      />
    </svg>
  );
}

function RequestsIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0004 2.5V8.49997M10.0004 8.49997L12.2503 6.24998M10.0004 8.49997L7.75037 6.24998"
        stroke="#374151"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 10.7501H4.87018C5.54906 10.7501 5.8885 10.7501 6.18686 10.8874C6.48523 11.0246 6.70614 11.2823 7.14794 11.7977L7.60201 12.3275C8.04381 12.8429 8.26472 13.1007 8.56312 13.2379C8.86147 13.3751 9.20092 13.3751 9.87974 13.3751H10.1202C10.799 13.3751 11.1385 13.3751 11.4368 13.2379C11.7352 13.1007 11.9561 12.8429 12.3979 12.3275L12.852 11.7977C13.2938 11.2823 13.5147 11.0246 13.8131 10.8874C14.1114 10.7501 14.4509 10.7501 15.1297 10.7501H17.4999"
        stroke="#374151"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M17.4999 9.99986C17.4999 13.5353 17.4999 15.3032 16.4016 16.4015C15.3033 17.4998 13.5354 17.4998 9.99996 17.4998C6.46444 17.4998 4.69669 17.4998 3.59835 16.4015C2.5 15.3032 2.5 13.5353 2.5 9.99986C2.5 6.46433 2.5 4.69657 3.59835 3.59823C4.2107 2.98588 5.03113 2.71493 6.24998 2.59503M13.7499 2.59503C14.9688 2.71493 15.7893 2.98588 16.4016 3.59823C17.1319 4.32853 17.3766 5.35472 17.4586 6.9998"
        stroke="#374151"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UpArrowIcon() {
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 12.1667V2.83333M7 2.83333L10.5 6.33333M7 2.83333L3.5 6.33333"
        stroke="#027A48"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ForwardIcon() {
  return (
    <svg
      width="6"
      height="11"
      viewBox="0 0 6 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.916707 1.33333L5.08337 5.49999L0.916707 9.66666"
        stroke="#0BA5EC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function QuotesIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.11967 1.04166H10.8803C12.4118 1.04165 13.6248 1.04164 14.5742 1.16928C15.5512 1.30063 16.342 1.5774 16.9657 2.20103C17.2097 2.44511 17.2097 2.84084 16.9657 3.08491C16.7216 3.329 16.3258 3.329 16.0817 3.08491C15.7291 2.73224 15.246 2.52085 14.4077 2.40813C13.5513 2.29299 12.4223 2.29166 10.8333 2.29166H9.16667C7.57765 2.29166 6.44876 2.29299 5.59238 2.40813C4.75397 2.52085 4.27093 2.73224 3.91825 3.08491C3.56558 3.43759 3.35418 3.92063 3.24147 4.75904C3.12633 5.61542 3.125 6.74431 3.125 8.33333V11.6667C3.125 13.2557 3.12633 14.3846 3.24147 15.241C3.35418 16.0793 3.56558 16.5624 3.91825 16.9151C4.27093 17.2677 4.75397 17.4792 5.59238 17.5918C6.44876 17.707 7.57765 17.7083 9.16667 17.7083H10.8333C12.4223 17.7083 13.5513 17.707 14.4077 17.5918C15.246 17.4792 15.7291 17.2677 16.0817 16.9151C16.6617 16.3352 16.8373 15.434 16.8678 13.3243C16.8728 12.9792 17.1567 12.7034 17.5018 12.7084C17.8469 12.7134 18.1227 12.9972 18.1177 13.3423C18.0884 15.3652 17.9575 16.8071 16.9657 17.799C16.342 18.4226 15.5512 18.6993 14.5742 18.8307C13.6248 18.9583 12.4118 18.9583 10.8803 18.9583H9.11967C7.58819 18.9583 6.37516 18.9583 5.42582 18.8307C4.4488 18.6993 3.65801 18.4226 3.03437 17.799C2.41073 17.1753 2.13397 16.3845 2.00262 15.4075C1.87498 14.4582 1.87498 13.2452 1.875 11.7137V8.28631C1.87498 6.75485 1.87498 5.54182 2.00262 4.59248C2.13397 3.61546 2.41073 2.82467 3.03437 2.20103C3.65801 1.5774 4.4488 1.30063 5.42582 1.16928C6.37516 1.04164 7.58818 1.04165 9.11967 1.04166ZM15.0943 5.8713C15.9783 4.98734 17.4114 4.98734 18.2953 5.8713C19.1793 6.75525 19.1793 8.18842 18.2953 9.07241L14.3326 13.0352C14.117 13.2508 13.9712 13.3967 13.8078 13.5241C13.6156 13.674 13.4077 13.8025 13.1877 13.9074C13.0006 13.9965 12.8049 14.0617 12.5156 14.1581L10.7793 14.7369C10.3959 14.8647 9.97325 14.7649 9.6875 14.4792C9.40175 14.1934 9.302 13.7707 9.42975 13.3874L9.99692 11.686C10.0008 11.6742 10.0047 11.6626 10.0085 11.6511C10.1049 11.3618 10.1702 11.1661 10.2593 10.979C10.3642 10.759 10.4927 10.5511 10.6426 10.3589C10.77 10.1955 10.9158 10.0497 11.1315 9.83408C11.1401 9.8255 11.1488 9.81683 11.1576 9.808L15.0943 5.8713ZM17.4115 6.75518C17.0157 6.35938 16.374 6.35938 15.9782 6.75518L15.8267 6.90666C15.8349 6.93457 15.8443 6.96425 15.8552 6.99543C15.9335 7.22137 16.0823 7.52022 16.3643 7.8023C16.6464 8.08437 16.9453 8.23312 17.1713 8.31151C17.2024 8.32233 17.2321 8.33176 17.26 8.34L17.4115 8.1885C17.8073 7.7927 17.8073 7.15098 17.4115 6.75518ZM16.3053 9.29466C16.0404 9.1555 15.7544 8.96008 15.4805 8.68616C15.2066 8.41225 15.0112 8.12621 14.872 7.86131L12.0414 10.6919C11.7906 10.9428 11.7025 11.0323 11.6282 11.1277C11.5342 11.2482 11.4535 11.3787 11.3877 11.5168C11.3357 11.6259 11.2949 11.7447 11.1828 12.0813L10.8492 13.0821L11.0846 13.3175L12.0853 12.9839C12.422 12.8717 12.5408 12.831 12.6498 12.779C12.7879 12.7132 12.9184 12.6325 13.039 12.5385C13.1343 12.4642 13.2238 12.3761 13.4748 12.1252L16.3053 9.29466ZM6.04167 7.5C6.04167 7.15482 6.32149 6.875 6.66667 6.875H12.0833C12.4285 6.875 12.7083 7.15482 12.7083 7.5C12.7083 7.84517 12.4285 8.125 12.0833 8.125H6.66667C6.32149 8.125 6.04167 7.84517 6.04167 7.5ZM6.04167 10.8333C6.04167 10.4882 6.32149 10.2083 6.66667 10.2083H8.75C9.09517 10.2083 9.375 10.4882 9.375 10.8333C9.375 11.1785 9.09517 11.4583 8.75 11.4583H6.66667C6.32149 11.4583 6.04167 11.1785 6.04167 10.8333ZM6.04167 14.1667C6.04167 13.8215 6.32149 13.5417 6.66667 13.5417H7.91667C8.26184 13.5417 8.54167 13.8215 8.54167 14.1667C8.54167 14.5118 8.26184 14.7917 7.91667 14.7917H6.66667C6.32149 14.7917 6.04167 14.5118 6.04167 14.1667Z"
        fill="#374151"
      />
    </svg>
  );
}

function JobsIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2_535)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.96534 0.833344H8.03468C8.63368 0.833324 9.13314 0.833311 9.52968 0.886618C9.94821 0.942891 10.3261 1.06667 10.6297 1.37032C10.9333 1.67396 11.0571 2.05183 11.1134 2.47036C11.1528 2.76342 11.1631 3.11274 11.1657 3.5169C11.5981 3.53077 11.9835 3.55605 12.326 3.6021C13.1076 3.70718 13.7403 3.9286 14.2392 4.4275C14.7381 4.92642 14.9595 5.55905 15.0646 6.34066C15.1667 7.10014 15.1667 8.07054 15.1667 9.29574V9.37094C15.1667 10.5961 15.1667 11.5665 15.0646 12.326C14.9595 13.1076 14.7381 13.7403 14.2392 14.2392C13.7403 14.7381 13.1076 14.9595 12.326 15.0646C11.5665 15.1667 10.5961 15.1667 9.37094 15.1667H6.62907C5.4039 15.1667 4.43347 15.1667 3.674 15.0646C2.89238 14.9595 2.25975 14.7381 1.76084 14.2392C1.26193 13.7403 1.04052 13.1076 0.935437 12.326C0.833324 11.5665 0.83333 10.5961 0.833344 9.37094V9.29574C0.83333 8.07054 0.833324 7.10014 0.935437 6.34066C1.04052 5.55905 1.26193 4.92642 1.76084 4.4275C2.25975 3.9286 2.89238 3.70718 3.674 3.6021C4.01651 3.55605 4.40193 3.53077 4.83428 3.5169C4.83694 3.11274 4.84722 2.76342 4.88662 2.47036C4.94289 2.05183 5.06667 1.67396 5.37032 1.37032C5.67396 1.06667 6.05183 0.942891 6.47036 0.886618C6.86688 0.833311 7.36634 0.833324 7.96534 0.833344ZM5.83454 3.5012C6.08663 3.5 6.3513 3.50001 6.62906 3.50001H9.37094C9.64874 3.50001 9.91341 3.5 10.1655 3.5012C10.1627 3.12098 10.1533 2.83418 10.1223 2.6036C10.0809 2.29596 10.0095 2.1643 9.92261 2.07742C9.83574 1.99054 9.70408 1.91906 9.39641 1.8777C9.07441 1.83441 8.64268 1.83334 8.00001 1.83334C7.35734 1.83334 6.92561 1.83441 6.6036 1.8777C6.29596 1.91906 6.1643 1.99054 6.07742 2.07742C5.99054 2.1643 5.91906 2.29596 5.8777 2.6036C5.8467 2.83418 5.83735 3.12098 5.83454 3.5012ZM3.80724 4.59318C3.13652 4.68336 2.75008 4.85248 2.46794 5.13462C2.1858 5.41675 2.01669 5.80318 1.92652 6.47391C1.8344 7.15901 1.83334 8.06214 1.83334 9.33334C1.83334 10.6045 1.8344 11.5077 1.92652 12.1928C2.01669 12.8635 2.1858 13.2499 2.46794 13.5321C2.75008 13.8142 3.13652 13.9833 3.80724 14.0735C4.49235 14.1656 5.39546 14.1667 6.66668 14.1667H9.33334C10.6045 14.1667 11.5077 14.1656 12.1928 14.0735C12.8635 13.9833 13.2499 13.8142 13.5321 13.5321C13.8142 13.2499 13.9833 12.8635 14.0735 12.1928C14.1656 11.5077 14.1667 10.6045 14.1667 9.33334C14.1667 8.06214 14.1656 7.15901 14.0735 6.47391C13.9833 5.80318 13.8142 5.41675 13.5321 5.13462C13.2499 4.85248 12.8635 4.68336 12.1928 4.59318Z"
          fill="#1F2937"
        />
        <path
          d="M11.3333 6.00001C11.3333 6.3682 11.0349 6.66668 10.6667 6.66668C10.2985 6.66668 10 6.3682 10 6.00001C10 5.63182 10.2985 5.33334 10.6667 5.33334C11.0349 5.33334 11.3333 5.63182 11.3333 6.00001Z"
          fill="#1F2937"
        />
        <path
          d="M6.00002 6.00001C6.00002 6.3682 5.70155 6.66668 5.33335 6.66668C4.96517 6.66668 4.66669 6.3682 4.66669 6.00001C4.66669 5.63182 4.96517 5.33334 5.33335 5.33334C5.70155 5.33334 6.00002 5.63182 6.00002 6.00001Z"
          fill="#1F2937"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_535">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function InvoicesIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 4.66665V4.24669C14 3.45135 14 3.05368 13.8947 2.73295C13.695 2.12477 13.2312 1.64729 12.6404 1.44172C12.3289 1.33331 11.9426 1.33331 11.17 1.33331H4.83001C4.05743 1.33331 3.67114 1.33331 3.35959 1.44172C2.76881 1.64729 2.30499 2.12477 2.1053 2.73295C2 3.05368 2 3.45135 2 4.24669V9.99998M14 7.33331V13.5828C14 14.1549 13.3433 14.4585 12.9279 14.0784C12.6839 13.855 12.3161 13.855 12.0721 14.0784L11.75 14.3731C11.3223 14.7645 10.6777 14.7645 10.25 14.3731C9.82227 13.9817 9.17773 13.9817 8.75 14.3731C8.32227 14.7645 7.67773 14.7645 7.25 14.3731C6.82227 13.9817 6.17773 13.9817 5.75 14.3731C5.32227 14.7645 4.67773 14.7645 4.25 14.3731L3.92793 14.0784C3.68389 13.855 3.31611 13.855 3.07207 14.0784C2.65667 14.4585 2 14.1549 2 13.5828V12.6666"
        stroke="#1F2937"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M6.33334 6.93331L7.28574 7.99998L9.66668 5.33331"
        stroke="#1F2937"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 10.3333H6M11 10.3333H8"
        stroke="#1F2937"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BlackDownArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginRight: 4, verticalAlign: 'middle' }}
    >
      <path
        d="M3.5 5.5L7 9L10.5 5.5"
        stroke="#222"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Dummy data for cards
const performanceCards = [
  {
    title: 'Requests',
    value: '2,156',
    trend: '+8%',
    trendColor: '#52c41a',
    chart: true,
    sub1: { label: 'Conversion rate', value: '34.2%' },
    sub2: { label: 'Unanswered', value: '67' },
    link: 'Go to Requests',
  },
  {
    title: 'Quotes',
    value: '1,843',
    trend: '+6%',
    trendColor: '#52c41a',
    chart: true,
    sub1: { label: 'Conversion rate', value: '29.1%' },
    sub2: { label: 'Unanswered', value: '54' },
    link: 'Go to Quotes',
  },
  {
    title: 'Jobs',
    value: '427',
    trend: '+2%',
    trendColor: '#52c41a',
    chart: true,
    sub1: { label: 'Job requests', value: '31' },
    sub2: { label: 'Completed', value: '18' },
    link: 'Go to Jobs',
  },
  {
    title: 'Invoices',
    value: '€287k (380)',
    trend: '+4%',
    trendColor: '#52c41a',
    chart: true,
    sub1: { label: 'Sent & paid', value: '€190,087 (275)' },
    sub2: { label: 'Open', value: '€97,000 (105)' },
    link: 'Go to Invoices',
  },
];

// Dummy data for table
const scheduleData = [
  {
    key: 1,
    item: 'Visit Title',
    description: 'Sjoerd van der Meer',
    address: 'Domstraat 27 Kantoor 4B Utrecht Utrecht 3512 JC Netherlands',
    status: 'Overdue',
    type: 'Visit',
    date: 'Jan 11, 2022',
    time: '09:00',
    team: [{ name: 'Luuk', avatar: 'LJ', color: '#ff7875' }],
  },
  {
    key: 2,
    item: 'Task Title',
    description: 'Annemieke de Vries',
    address:
      'Amstelveenseweg 143, Unit 2.1 Amsterdam Noord-Holland, 1075 XV Ne...',
    status: 'Overdue',
    type: 'Task',
    date: 'Jan 14, 2022',
    time: '14:00',
    team: [
      { name: 'Julia', avatar: 'JV', color: '#9254de' },
      { name: '& 1 other', avatar: 'K', color: '#ffc53d' },
    ],
  },
  {
    key: 3,
    item: 'Request Title',
    description: 'Femke Visser',
    address:
      'Stationsplein 89 3e verdieping Rotterdam Zuid-Holland 3013 AJ Netherlands',
    status: 'Overdue',
    type: 'Request',
    date: 'Jan 28, 2022',
    time: '',
    team: [{ name: 'No one', avatar: '', color: '#d9d9d9' }],
  },
  // ... more rows as needed
];

const statusColors: Record<string, string> = {
  Overdue: '#f5222d',
  Unscheduled: '#fa8c16',
  Scheduled: '#1890ff',
  Completed: '#52c41a',
};
const typeColors: Record<string, string> = {
  Visit: '#52c41a',
  Task: '#1890ff',
  Request: '#fa8c16',
};

const columns = [
  {
    title: (
      <span style={{ display: 'flex', alignItems: 'center' }}>
        Item
        <BlackDownArrowIcon />
      </span>
    ),
    dataIndex: 'item',
    key: 'item',
    render: (text: string, record: any) => (
      <div>
        <div style={{ fontWeight: 600 }}>{text}</div>
        <div style={{ color: '#888', fontSize: 13 }}>{record.description}</div>
      </div>
    ),
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    render: (text: string) => (
      <span style={{ color: '#888', fontSize: 13 }}>{text}</span>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => (
      <span style={{ color: statusColors[status], fontWeight: 600 }}>
        {status}
      </span>
    ),
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: (type: string) => (
      <Badge color={typeColors[type]} text={type} style={{ fontWeight: 500 }} />
    ),
  },
  {
    title: 'Date & time',
    key: 'date',
    render: (_: any, record: any) => (
      <div>
        <div
          style={{
            color: record.status === 'Overdue' ? '#f5222d' : '#222',
            fontWeight: 500,
          }}
        >
          {record.date}
        </div>
        {record.time && (
          <div
            style={{
              color: record.status === 'Overdue' ? '#f5222d' : '#222',
              fontWeight: 500,
            }}
          >
            {record.time}
          </div>
        )}
      </div>
    ),
  },
  {
    title: 'Team',
    key: 'team',
    render: (_: any, record: any) => (
      <Flex align="center" gap="small">
        <Avatar.Group
          maxCount={3}
          maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
        >
          {record.team.map((assignee: any, idx: number) =>
            assignee.avatar ? (
              <Avatar
                key={idx}
                style={{ backgroundColor: assignee.color, fontWeight: 600 }}
              >
                {assignee.avatar}
              </Avatar>
            ) : (
              <Avatar
                key={idx}
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
            {record.team.map((a: any) => a.name).join(' ')}
          </div>
        </div>
      </Flex>
    ),
  },
];

const Dashboard: FC = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const [filter, setFilter] = useState('All');
  const { user } = useUser();
  const pathname = usePathname();
  const [dateRange, setDateRange] = useState('last30'); // 'last30' or 'month'

  const pageTitles: Record<string, string> = {
    '/dashboard': 'Dashboard',
    '/home': 'Home',
    '/create': 'Create',
    // add more as needed
  };

  // Prepare card data with icon components
  const dashboardCards = [
    {
      icon: RequestsIcon,
      title: 'Requests',
      value: '2,156',
      change: '8%',
      sub: 'Total requests',
      extra: [
        { label: 'Conversion rate', value: '34.2%' },
        { label: 'Unanswered', value: '67' },
      ],
      link: 'Go to Requests',
    },
    {
      icon: QuotesIcon,
      title: 'Quotes',
      value: '1,843',
      change: '15%',
      sub: 'Total quotes',
      extra: [
        { label: 'Conversion rate', value: '41.8%' },
        { label: 'Sent (awaiting response)', value: '124' },
      ],
      link: 'Go to Quotes',
    },
    {
      icon: JobsIcon,
      title: 'Jobs',
      value: '427',
      change: '6%',
      sub: 'Total jobs',
      extra: [
        { label: 'Job revenue', value: '€40k' },
        { label: 'Complete & unpaid', value: '31' },
      ],
      link: 'Go to Jobs',
    },
    {
      icon: InvoicesIcon,
      title: 'Invoices',
      value: '€287k (380)',
      change: '9%',
      sub: 'Total invoices',
      extra: [
        { label: 'Sent & unpaid', value: '€18,450 (47)' },
        { label: 'To be sent', value: '23' },
      ],
      link: 'Go to Invoices',
    },
  ];

  // Filtered data for search
  const filteredData = scheduleData.filter(
    (row) =>
      (filter === 'All' || row.status === filter) &&
      (row.item.toLowerCase().includes(search.toLowerCase()) ||
        row.description.toLowerCase().includes(search.toLowerCase()) ||
        row.address.toLowerCase().includes(search.toLowerCase())),
  );

  const pagedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  return (
    <div className="home-container" style={{ minHeight: '100vh', padding: 0 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <div>
          <h2 style={{ margin: 0 }}>Welcome, David</h2>
          <div style={{ fontWeight: 500, marginTop: 16 }}>
            Business performance
          </div>
          <div style={{ color: '#888', fontSize: 14, marginTop: 4 }}>
            Showing performance metrics for December 1 - 17, 2024
          </div>
        </div>
        <div style={{ minWidth: 220, textAlign: 'end' }}>
          <div
            style={{
              color: '#8b96a5',
              fontSize: 12,
              marginBottom: 12,
              fontWeight: 500,
            }}
          >
            Tuesday, Dec 17, 2024
          </div>
          <div
            style={{
              display: 'flex',
              background: '#f5f6fa',
              borderRadius: 12,
              border: '1px solid #e0e0e0',
              padding: 2,
              width: 'fit-content',
              margin: '0 auto',
              gap: 0,
            }}
          >
            <button
              onClick={() => setDateRange('month')}
              style={{
                padding: '8px 16px',
                borderRadius: 10,
                background: dateRange === 'month' ? '#fff' : '#f5f6fa',
                color: dateRange === 'month' ? '#222' : '#8b96a5',
                fontWeight: dateRange === 'month' ? 700 : 500,
                fontSize: 12,
                border: dateRange === 'month' ? '1.5px solid #e0e0e0' : 'none',
                boxShadow: dateRange === 'month' ? '0 1px 4px #e0e0e0' : 'none',
                marginRight: 2,
                cursor: 'pointer',
                outline: 'none',
                transition: 'all 0.15s',
              }}
            >
              Month to date
            </button>
            <button
              onClick={() => setDateRange('last30')}
              style={{
                padding: '8px 16px',
                borderRadius: 10,
                background: dateRange === 'last30' ? '#fff' : '#f5f6fa',
                color: dateRange === 'last30' ? '#222' : '#8b96a5',
                fontWeight: dateRange === 'last30' ? 700 : 500,
                fontSize: 12,
                border: dateRange === 'last30' ? '1.5px solid #e0e0e0' : 'none',
                boxShadow:
                  dateRange === 'last30' ? '0 1px 4px #e0e0e0' : 'none',
                marginLeft: 2,
                cursor: 'pointer',
                outline: 'none',
                transition: 'all 0.15s',
              }}
            >
              Last 30 days
            </button>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 24, marginTop: 32 }}>
        {dashboardCards.map((card, idx) => {
          const IconComponent = card.icon;
          return (
            <div
              key={card.title + idx}
              style={{
                flex: 1,
                background: '#fff',
                border: '1px solid #e0e0e0',
                borderRadius: 16,
                padding: 12,
                minWidth: 200,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: 22,
                  marginBottom: 8,
                }}
              >
                <IconComponent />
                <span style={{ fontSize: 17, fontWeight: 600 }}>
                  {card.title}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 2,
                }}
              >
                <span style={{ fontSize: 28, fontWeight: 700 }}>
                  {card.value}
                </span>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#1ecb81',
                    fontWeight: 600,
                    fontSize: 15,
                    background: '#eafaf3',
                    borderRadius: 8,
                    padding: '2px 8px',
                    marginLeft: 2,
                  }}
                >
                  <UpArrowIcon />
                  <span style={{ marginLeft: 3 }}>{card.change}</span>
                </span>
              </div>
              <div style={{ color: '#888', fontSize: 15, marginBottom: 8 }}>
                {card.sub}
              </div>
              <div style={{ width: '100%', margin: '8px 0' }}>
                <MiniChart />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0,
                  fontSize: 14,
                  marginBottom: 8,
                  width: '100%',
                }}
              >
                {card.extra.map((ex) => (
                  <div
                    key={ex.label}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ color: '#667085' }}>{ex.label}</span>
                    <span style={{ fontWeight: 600, color: '#101828' }}>
                      {ex.value}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href="#"
                style={{
                  color: '#1a7cff',
                  fontWeight: 500,
                  fontSize: 15,
                  marginTop: 8,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                }}
              >
                {card.link} <ForwardIcon />
              </a>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 36, marginBottom: 12 }}>
        <div
          style={{
            fontSize: 19,
            color: '#344054',
            fontWeight: 400,
            marginBottom: 16,
          }}
        >
          Schedule Items for Today & Tomorrow{' '}
          <b style={{ fontWeight: 700 }}>(All - 15)</b>
        </div>
        <Flex
          align="center"
          justify="space-between"
          gap={16}
          style={{ marginBottom: 16 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Checkbox
              checked={filter === 'All'}
              onChange={() => setFilter('All')}
            >
              All
            </Checkbox>
            <Checkbox
              checked={filter === 'Overdue'}
              onChange={() => setFilter('Overdue')}
            >
              Overdue
            </Checkbox>
            <Checkbox
              checked={filter === 'Unscheduled'}
              onChange={() => setFilter('Unscheduled')}
            >
              Unscheduled
            </Checkbox>
            <Checkbox
              checked={filter === 'Scheduled'}
              onChange={() => setFilter('Scheduled')}
            >
              Scheduled
            </Checkbox>
            <Checkbox
              checked={filter === 'Completed'}
              onChange={() => setFilter('Completed')}
            >
              Completed
            </Checkbox>
            <Button
              type="default"
              style={{
                border: '1.5px solid #e5eaf2',
                borderRadius: 999,
                background: '#fff',
                color: '#888',
                fontWeight: 500,
                boxShadow: 'none',
                padding: '0 18px',
                height: 36,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                marginLeft: 16,
              }}
              icon={<DownOutlined style={{ fontSize: 14, color: '#bfbfbf' }} />}
            >
              Filters
            </Button>
          </div>
          <Input
            style={{
              width: 220,
              border: '1.5px solid #e5eaf2',
              borderRadius: 999,
              background: '#fff',
              color: '#222',
              fontWeight: 400,
              height: 36,
              boxShadow: 'none',
              marginLeft: 16,
            }}
            placeholder="Search an item"
            prefix={<SearchOutlined style={{ color: '#bfbfbf' }} />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            allowClear
          />
        </Flex>
        <div
          style={{
            border: '1.5px solid #e5eaf2',
            borderRadius: 12,
            background: '#fff',
            marginBottom: 0,
          }}
        >
          <Table
            columns={columns}
            dataSource={pagedData}
            pagination={false}
            bordered={false}
            style={{
              borderRadius: 12,
              background: '#fff',
              boxShadow: 'none',
              marginBottom: 0,
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 24,
            width: '100%',
          }}
        >
          {/* First Button - Left */}
          <Button
            type="default"
            shape="round"
            size="small"
            style={{
              minWidth: 56,
              fontWeight: 500,
              borderColor: '#e6e6e6',
              background: '#fff',
              marginLeft: 8,
            }}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(1)}
          >
            First
          </Button>

          {/* Centered Pagination */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {/* Prev Arrow */}
            <Button
              type="text"
              shape="circle"
              size="small"
              style={{
                fontSize: 18,
                color: currentPage === 1 ? '#bfbfbf' : '#222',
                boxShadow: 'none',
              }}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              &lt;
            </Button>

            {/* Pagination Numbers */}
            {/* <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={filteredData.length}
              onChange={setCurrentPage}
              showSizeChanger={false}
              showPrevNextJumpers={false}
              itemRender={(page, type, originalElement) => {
                if (type === 'page') {
                  return (
                    <span
                      style={{
                        border:
                          currentPage === page
                            ? '1px solid #1890ff'
                            : '1px solid #e6e6e6',
                        borderRadius: 8,
                        padding: '0 10px',
                        color: currentPage === page ? '#1890ff' : '#222',
                        fontWeight: 500,
                        background: currentPage === page ? '#f5faff' : '#fff',
                        margin: '0 2px',
                        cursor: 'pointer',
                        minWidth: 32,
                        display: 'inline-block',
                        textAlign: 'center',
                        lineHeight: '28px',
                        transition: 'border 0.2s, color 0.2s, background 0.2s',
                      }}
                    >
                      {page}
                    </span>
                  );
                }
                return originalElement;
              }}
              style={{ verticalAlign: 'middle' }}
              prevIcon={null}
              nextIcon={null}
            /> */}

            {/* Next Arrow */}
            <Button
              type="text"
              shape="circle"
              size="small"
              style={{
                fontSize: 18,
                color:
                  currentPage === Math.ceil(filteredData.length / pageSize) ||
                  filteredData.length === 0
                    ? '#bfbfbf'
                    : '#222',
                boxShadow: 'none',
              }}
              disabled={
                currentPage === Math.ceil(filteredData.length / pageSize) ||
                filteredData.length === 0
              }
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              &gt;
            </Button>
          </div>

          {/* Last Button - Right */}
          <Button
            type="default"
            shape="round"
            size="small"
            style={{
              minWidth: 56,
              fontWeight: 500,
              borderColor: '#e6e6e6',
              background: '#fff',
              marginRight: 8,
            }}
            disabled={
              currentPage === Math.ceil(filteredData.length / pageSize) ||
              filteredData.length === 0
            }
            onClick={() =>
              setCurrentPage(Math.ceil(filteredData.length / pageSize))
            }
          >
            Last
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
