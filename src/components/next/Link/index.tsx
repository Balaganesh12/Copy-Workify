import Link, { LinkProps } from 'next/link';
import styles from './index.module.scss';

type NextLinkProps = LinkProps & {
  className?: string;
  children: React.ReactNode;
};

const NextLink = ({ href, children, className }: NextLinkProps) => {
  return (
    <Link href={href} className={className + ' ' + styles.nextLink}>
      {children}
    </Link>
  );
};

export default NextLink;
