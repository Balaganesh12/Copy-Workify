import { Rule } from 'antd/es/form';

export const emailRules: Rule[] = [
  {
    required: true,
    message: 'E-mailadres is verplicht',
  },
  {
    type: 'email',
    message: 'Voer een geldig e-mailadres in',
    transform: (value) => value?.trim(),
  },
];

export const passwordRequiredRule: Rule[] = [
  {
    required: true,
    message: 'Wachtwoord is verplicht',
  },
];

export const passwordComplexityRules: Rule[] = [
  {
    validator: (_, value) => {
      if (!value || value.length < 8) {
        return Promise.reject('Wachtwoord moet minimaal 8 tekens bevatten');
      }
      return Promise.resolve();
    },
  },
  {
    validator: (_, value) => {
      if (!value) return Promise.resolve();
      if (!/[A-Z]/.test(value)) {
        return Promise.reject(
          'Wachtwoord moet minimaal 1 hoofdletter bevatten',
        );
      }
      return Promise.resolve();
    },
  },
  {
    validator: (_, value) => {
      if (!value) return Promise.resolve();
      if (!/[a-z]/.test(value)) {
        return Promise.reject(
          'Wachtwoord moet minimaal 1 kleine letter bevatten',
        );
      }
      return Promise.resolve();
    },
  },
  {
    validator: (_, value) => {
      if (!value) return Promise.resolve();
      if (!/\d/.test(value)) {
        return Promise.reject('Wachtwoord moet minimaal 1 cijfer bevatten');
      }
      return Promise.resolve();
    },
  },
  {
    validator: (_, value) => {
      if (!value) return Promise.resolve();
      if (!/[^A-Za-z0-9]/.test(value)) {
        return Promise.reject(
          'Wachtwoord moet minimaal 1 speciaal teken bevatten',
        );
      }
      return Promise.resolve();
    },
  },
];

export const passwordValidationRules: Rule[] = [
  ...passwordRequiredRule,
  ...passwordComplexityRules,
];

export const confirmPasswordValidationRules: Rule[] = [
  {
    required: true,
    message: 'Bevestig je wachtwoord',
  },
  ...passwordComplexityRules,
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject('Wachtwoorden komen niet overeen');
    },
  }),
];

export const phoneNumberValidationRules: Rule[] = [
  {
    pattern: /^(\+31[1-9][0-9]{8}|0[1-9][0-9]{8})$/,
    message: 'Voer een geldig telefoonnummer in',
  },
];

export const phoneNumberRequiredRule: Rule[] = [
  {
    required: true,
    message: 'Telefoonnummer is verplicht',
  },
  ...phoneNumberValidationRules,
];
