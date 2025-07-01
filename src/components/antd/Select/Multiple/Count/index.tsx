import AntdBadge from '@/components/antd/Badge';

const Count = ({ count }: { count: number }) => {
  return <AntdBadge count={count} color="#374151" />;
};

export default Count;
