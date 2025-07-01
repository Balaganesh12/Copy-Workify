import { Popover, PopoverProps } from 'antd';
import { ReactNode } from 'react';
import styles from './index.module.scss';

interface AntdPopoverProps extends PopoverProps {
  width?: number;
}

const AntdPopover = ({
  width,
  title,
  content,
  placement,
  children,
  ...rest
}: AntdPopoverProps) => {
  const styledTitle = title ? (
    <div className={styles.title} style={{ width }}>
      {title as ReactNode}
    </div>
  ) : null;

  const styledContent = <div style={{ width }}>{content as ReactNode}</div>;

  return (
    <Popover
      zIndex={1000}
      placement={placement}
      title={styledTitle}
      content={styledContent}
      className={styles.popover}
      trigger="click"
      {...rest}
    >
      <div className={styles.popoverContent}>{children}</div>
    </Popover>
  );
};

export default AntdPopover;
