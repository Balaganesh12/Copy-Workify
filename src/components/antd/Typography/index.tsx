import { Typography } from 'antd';
import type { LinkProps } from 'antd/es/typography/Link';
import type { ParagraphProps } from 'antd/es/typography/Paragraph';
import type { TextProps } from 'antd/es/typography/Text';
import type { TitleProps } from 'antd/es/typography/Title';

// Individual wrappers for each component (optional if you want to add logic/styling)
const AntdTypographyText = (props: TextProps) => <Typography.Text {...props} />;

const AntdTypographyParagraph = (props: ParagraphProps) => (
  <Typography.Paragraph {...props} />
);

const AntdTypographyTitle = (props: TitleProps) => (
  <Typography.Title {...props} />
);

const AntdTypographyLink = (props: LinkProps) => <Typography.Link {...props} />;

// Grouped export
export const AntdTypography = {
  Text: AntdTypographyText,
  Paragraph: AntdTypographyParagraph,
  Title: AntdTypographyTitle,
  Link: AntdTypographyLink,
};

export default AntdTypography;
