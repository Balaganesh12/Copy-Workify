import { ClientDataType } from '@/section/Private/Client/types';

const LastActivity = {
  title: 'Laatste activiteit',
  dataIndex: 'lastActivity',
  key: 'lastActivity',
  sorter: (a: ClientDataType, b: ClientDataType) =>
    a.lastActivity.localeCompare(b.lastActivity),
};

export default LastActivity;
