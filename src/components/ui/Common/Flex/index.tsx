import React from 'react';

type FlexProps = React.HTMLAttributes<HTMLDivElement> & {
  gap?: number | string;
  align?: React.CSSProperties['alignItems'];
  justify?: React.CSSProperties['justifyContent'];
  direction?: React.CSSProperties['flexDirection'];
  wrap?: React.CSSProperties['flexWrap'];
  height?: string;
};

const CustomFlex: React.FC<FlexProps> = ({
  height = '',
  gap = 8,
  align = 'stretch',
  justify = 'flex-start',
  direction = 'row',
  wrap = 'nowrap',
  style,
  children,
  ...rest
}) => {
  return (
    <div
      style={{
        display: 'flex',
        gap,
        alignItems: align,
        justifyContent: justify,
        flexDirection: direction,
        flexWrap: wrap,
        height,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default CustomFlex;
