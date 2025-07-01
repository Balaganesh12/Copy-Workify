import Dashboard from '@/section/Private/Client/Dashboard';
import { ClientDataType } from '@/section/Private/Client/types';

const ClientsPage = () => {
  const dataSource: ClientDataType[] = [
    {
      key: '1',
      id: 1,
      firstName: 'Lars',
      lastName: 'van Dijk',
      company: 'De Groene Haven B.V.',
      avatar: { text: 'LD', color: '#ab86fd' },
      address: '2 Properties',
      leadSource: 'Referral',
      status: { text: 'Active', type: 'active' },
      lastActivity: 'Jan 6, 2022',
      tags: ['New', 'Follow-up Needed'],
    },
    {
      key: '2',
      id: 2,
      firstName: 'Emma',
      lastName: 'Bakker',
      company: 'Zonneweelde Projects B.V.',
      avatar: { text: 'EB', color: '#f553b2' },
      address: 'Amstelveenseweg 143...',
      leadSource: 'Google',
      status: { text: 'Lead', type: 'lead' },
      lastActivity: 'Jan 11, 2022',
      tags: ['Lead', 'Follow-up Needed'],
    },
    {
      key: '3',
      id: 3,
      firstName: 'John',
      lastName: 'Doe',
      company: 'Acme Inc.',
      avatar: { text: 'JD', color: '#f553b2' },
      address: 'Amstelveenseweg 143...',
      leadSource: 'Google',
      status: { text: 'Inactive', type: 'inactive' },
      lastActivity: 'Jan 11, 2022',
      tags: ['Lead', 'Follow-up Needed'],
    },
  ];

  return <Dashboard dataSource={dataSource} />;
};

export default ClientsPage;
