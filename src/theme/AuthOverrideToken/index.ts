import antdThemeTokens from '../index';

const AuthOverrideToken = {
  ...antdThemeTokens,
  components: {
    ...antdThemeTokens.components,
    Form: {
      labelFontSize: 16,
      labelColor: '#1f2937',
      labelHeight: 20,
      verticalLabelPadding: '0 0 8px 0',
    },
  },
};

export default AuthOverrideToken;
