import postmarkClient from '../client';

interface SendPasswordResetParams {
  to: string;
  name: string;
  resetUrl: string;
}

export async function sendPasswordResetEmail({
  to,
  name,
  resetUrl,
}: SendPasswordResetParams) {
  return postmarkClient.sendEmailWithTemplate({
    From: 'david.bakker@workify.nl',
    To: to,
    TemplateAlias: 'password-reset',
    TemplateModel: {
      product_url: 'https://workify.nl',
      product_name: 'Workify',
      name: name || 'there',
      action_url: resetUrl,
      support_url: 'https://workify.nl/support',
      company_name: 'Workify',
      company_address: '123 Street, City, Country',
    },
  });
}
