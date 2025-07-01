export const onboardingFormItems = {
  firstName: {
    name: 'first_name',
    label: 'Voornaam',
    placeholder: 'Voer je voornaam in',
  },
  lastName: {
    name: 'last_name',
    label: 'Achternaam',
    placeholder: 'Voer je achternaam in',
  },
  phone: {
    name: 'phone_number',
    label: 'Telefoonnummer ',
    optionalLabel: '(Optioneel)',
    placeholder: 'Voer je telefoonnummer in',
  },
  companyName: {
    name: 'company_name',
    label: 'Bedrijfsnaam',
    placeholder: 'Voer je bedrijfsnaam in',
  },
  industry: {
    name: 'industry',
    label: 'Branche',
    placeholder: 'Kies je branche',
  },
  companySize: {
    name: 'company_size',
    label: 'Bedrijfsgrootte',
    placeholder: 'Selecteer aantal medewerkers in je bedrijf',
  },
  companyWebsite: {
    name: 'company_website',
    label: 'Bedrijfswebsite (Optioneel)',
    placeholder: 'Voer je website URL in',
  },
  referral: {
    name: 'referral',
    label: '',
    placeholder: 'Selecteer bron',
  },
} as const;

export type OnboardingFormValues = {
  [onboardingFormItems.firstName.name]: string;
  [onboardingFormItems.lastName.name]: string;
  [onboardingFormItems.phone.name]: string;
};

export const IndustryOptions = [
  { value: 'bouw', label: 'Bouw & Ambachten' },
  { value: 'vastgoed', label: 'Vastgoeddiensten' },
  { value: 'professioneel', label: 'Professionele Diensten' },
  { value: 'gezondheidszorg', label: 'Gezondheidszorg' },
  { value: 'retail', label: 'Retail & Horeca' },
  { value: 'automotive', label: 'Automotive Diensten' },
  { value: 'persoonlijk', label: 'Persoonlijke Diensten' },
  { value: 'technologie', label: 'Technologie' },
  { value: 'productie', label: 'Productie' },
  { value: 'transport', label: 'Transport & Logistiek' },
];

export const CompanySizeOptions = [
  { value: '1-10', label: '1-10 medewerkers' },
  { value: '11-50', label: '11-50 medewerkers' },
  { value: '51-200', label: '51-200 medewerkers' },
  { value: '201-500', label: '201-500 medewerkers' },
  { value: '501-1000', label: '501-1000 medewerkers' },
  { value: '1000+', label: '1000+ medewerkers' },
];

export const ReferralOptions = [
  { value: 'google', label: 'Google Zoeken' },
  { value: 'social_media', label: 'Social Media' },
  { value: 'friend_colleague', label: 'Vriend of Collega' },
  { value: 'professional_network', label: 'Professioneel Netwerk' },
  { value: 'online_ad', label: 'Online Advertentie' },
  { value: 'blog_article', label: 'Blog of Artikel' },
  { value: 'email_newsletter', label: 'E-mail Nieuwsbrief' },
  { value: 'event_conference', label: 'Branche Evenement of Conferentie' },
  { value: 'other', label: 'Anders' },
];
