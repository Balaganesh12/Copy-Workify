import AntdSpace from '@/components/antd/Space';
import AntdTypography from '@/components/antd/Typography';

import antdThemeTokens from '@/theme/GlobalToken';

interface OnboardingFormHeaderProps {
  step: number;
  title: string;
  description: string;
}

const OnboardingFormHeader = ({
  step,
  title,
  description,
}: OnboardingFormHeaderProps) => {
  return (
    <AntdSpace direction="vertical" size={12}>
      <AntdTypography.Title level={3}>Stap {step}/3</AntdTypography.Title>
      <AntdTypography.Title>{title}</AntdTypography.Title>
      <AntdTypography.Text
        style={{
          fontSize: antdThemeTokens.fontSizeHeading3,
          fontWeight: 400,
        }}
        type="secondary"
      >
        {description}
      </AntdTypography.Text>
    </AntdSpace>
  );
};

export default OnboardingFormHeader;
