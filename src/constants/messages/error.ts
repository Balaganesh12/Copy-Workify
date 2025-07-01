export const ERROR_MESSAGE = {
  USER_NOT_REGISTERED: 'Gebruiker met dit e-mailadres bestaat niet',
  AUTH: {
    LOGIN_ERROR: 'Er is een onverwachte fout opgetreden tijdens het inloggen',
    LOGOUT_ERROR: 'Er is een onverwachte fout opgetreden tijdens het uitloggen',
    SIGNUP_ERROR:
      'Er is een onverwachte fout opgetreden tijdens het registreren',
    EMAIL_NOT_CONFIRMED: 'E-mail is niet geverifieerd. Verifieer uw e-mail.',
    OAUTH_ERROR: 'OAuth-fout',
    USER_ALREADY_EXISTS: 'Er bestaat al een gebruiker met dit e-mailadres', // ✅ renamed
    USER_DOES_NOT_EXIST: 'Gebruiker met dit e-mailadres bestaat niet', // ✅ added
    ERROR_CHECKING_EXISTING:
      'Er is een fout opgetreden bij het controleren op bestaande gebruiker',
    INVALID_CREDENTIALS: 'Ongeldig e-mailadres of wachtwoord',
    TOO_MANY_REQUESTS: 'Te veel aanvragen. Probeer het later opnieuw.',
    FAILED_TO_SEND_RESET_LINK:
      'Er is een fout opgetreden bij het versturen van het wachtwoord reset link',
    INVALID_OR_EXPIRED_TOKEN: 'Ongeldig of verlopen wachtwoord reset link',
    FAILED_TO_RESET_PASSWORD:
      'Er is een fout opgetreden bij het wachtwoord resetten',
  },
  USER: {
    ERROR_USER_CREATION:
      'Er is een fout opgetreden tijdens het aanmaken van de gebruiker',
    ERROR_FETCHING_CURRENT_USER:
      'Fout bij het ophalen van de ingelogde gebruiker',
    USER_NOT_FOUND: 'Gebruiker niet gevonden',
    UPDATE_USER_PROFILE_ERROR:
      'Er is een fout opgetreden bij het bijwerken van de gebruiker',
  },
  COMPANY: {
    COMPANY_DETAIL_SUCCESS: 'Bedrijfsgegevens succesvol toegevoegd',
  },
  CLIENT: {
    CLIENT_CREATE_ERROR:
      'Er is een fout opgetreden bij het aanmaken van de klant',
    CLIENT_UPDATE_ERROR:
      'Er is een fout opgetreden bij het bijwerken van de klant',
    CLIENT_DELETE_ERROR:
      'Er is een fout opgetreden bij het verwijderen van de klant',
    CLIENTS_FETCH_ERROR:
      'Er is een fout opgetreden bij het ophalen van de klanten',
    CLIENT_FETCH_ERROR:
      'Er is een fout opgetreden bij het ophalen van de klant',
    ADDRESS_ADD_ERROR:
      'Er is een fout opgetreden bij het toevoegen van het adres',
  },
  CATEGORY: {
    CATEGORY_FETCHED: 'Categorie succesvol opgehaald',
    CATEGORY_CREATE_ERROR:
      'Er is een fout opgetreden bij het aanmaken van de categorie',
    CATEGORY_UPDATE_ERROR:
      'Er is een fout opgetreden bij het bijwerken van de categorie',
    CATEGORY_DELETE_ERROR:
      'Er is een fout opgetreden bij het verwijderen van de categorie',
    CATEGORIES_FETCH_ERROR:
      'Er is een fout opgetreden bij het ophalen van de categorieën',
    CATEGORY_FETCH_ERROR:
      'Er is een fout opgetreden bij het ophalen van de categorie',
    CATEGORY_FETCH_ERROR_BY_ITEM_ID:
      'Er is een fout opgetreden bij het ophalen van de categorie',
  },
  SERVICE: {
    SERVICE_CREATE_ERROR:
      'Er is een fout opgetreden bij het aanmaken van de service',
    SERVICE_UPDATE_ERROR:
      'Er is een fout opgetreden bij het bijwerken van de service',
    SERVICE_DELETE_ERROR:
      'Er is een fout opgetreden bij het verwijderen van de service',
    SERVICES_FETCH_ERROR:
      'Er is een fout opgetreden bij het ophalen van de services',
    SERVICE_FETCH_ERROR:
      'Er is een fout opgetreden bij het ophalen van de service',
  },
  REQUEST: {
    REQUEST_CREATE_ERROR:
      'Er is een fout opgetreden bij het aanmaken van de aanvraag',
    REQUEST_UPDATE_ERROR:
      'Er is een fout opgetreden bij het bijwerken van de aanvraag',
    REQUESTS_FETCH_ERROR:
      'Er is een fout opgetreden bij het ophalen van de aanvragen',
    ASSESSMENT_CREATE_ERROR:
      'Er is een fout opgetreden bij het aanmaken van de beoordeling',
    ASSESSMENT_COMPLETE_ERROR:
      'Er is een fout opgetreden bij het voltooien van de beoordeling',
    REQUEST_FETCH_ERROR:
      'Er is een fout opgetreden bij het ophalen van de aanvraag',
    REQUEST_ID_REQUIRED: 'Aanvraag ID is vereist',
  },
  SCHEDULE: {
    SCHEDULE_CREATE_ERROR: 'Failed to create schedule',
    SCHEDULE_UPDATE_ERROR: 'Failed to update schedule',
    SCHEDULE_DELETE_ERROR: 'Failed to delete schedule',
    SCHEDULE_FETCH_ERROR: 'Failed to fetch schedule',
    SCHEDULES_FETCH_ERROR: 'Failed to fetch schedules',
    SCHEDULE_ID_REQUIRED: 'Schedule ID is required',
  },
  JOB: {
    JOB_CREATE_ERROR: 'Er is een fout opgetreden bij het aanmaken van de klus',
    JOB_UPDATE_ERROR: 'Er is een fout opgetreden bij het bijwerken van de klus',
    JOBS_FETCH_ERROR:
      'Er is een fout opgetreden bij het ophalen van de klussen',
    JOB_FETCH_ERROR: 'Er is een fout opgetreden bij het ophalen van de klus',
    JOB_ID_REQUIRED: 'Klus ID is vereist',
    JOB_DELETE_ERROR:
      'Er is een fout opgetreden bij het verwijderen van de klus',
  },
};
