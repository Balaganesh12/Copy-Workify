import type { Rule } from 'antd/es/form';

export const urlRules: Rule[] = [
  {
    pattern:
      /^(https?:\/\/)?(www\.)?([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,}([\/\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/,
    message: 'Voer een geldige website-URL in',
    transform: (value) => value?.trim(),
  },
];
