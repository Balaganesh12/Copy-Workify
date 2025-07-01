import { ClientDataType } from '@/section/Private/Client/types';

const AddressColumn = {
  title: 'Adres',
  dataIndex: 'address',
  key: 'address',
  sorter: (a: ClientDataType, b: ClientDataType) =>
    a.address.localeCompare(b.address),
  width: '320px',
};

export default AddressColumn;
