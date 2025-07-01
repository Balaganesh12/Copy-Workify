export interface ClientDataType {
  key: React.Key;
  id: number;
  firstName: string;
  lastName: string;
  company: string;
  avatar: { text: string; color: string };
  address: string;
  leadSource: string;
  status: { text: string; type: string };
  lastActivity: string;
  tags: string[];
}

export interface StatusStyle {
  color: string;
  backgroundColor: string;
}
