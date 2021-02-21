import { Patterns } from '../../shared/utilities/patterns';

export const ApplicationFormConfigs = {
  Kontaktdaten: [
    {
      formControlName: 'firstname',
      type: 'text',
      label: 'Vorname',
    },
    {
      formControlName: 'lastname',
      type: 'text',
      label: 'Nachname',
    },
    {
      formControlName: 'email',
      type: 'email',
      label: 'Email',
      pattern: Patterns.email
    },
    {
      formControlName: 'phone',
      type: 'number',
      label: 'Telefonnummer',
    },
    {
      formControlName: 'address',
      type: 'text',
      label: 'Adresse',
    }
  ],

  Angebot: [
    {
      formControlName: 'companyName',
      type: 'text',
      label: 'Firmenname'
    },
    {
      formControlName: 'categories',
      type: 'select',
      label: 'Kategorien',
      multiple: true,
      options: ['stoff', 'handwerk', 'schmuck']
    },
    {
      formControlName: 'description',
      type: 'textarea',
      label: 'Beschreibung'
    },
    {
      formControlName: 'social',
      type: 'select',
      label: 'Soziale Medien',
      multiple: true,
      options: ['facebook', 'twitter', 'instagram', 'website']
    }
  ],

  Fotos: [
    {
      formControlName: 'coverImg',
      type: 'upload',
      label: 'Titlebild',
      multiple: false
    },
    {
      formControlName: 'images',
      type: 'upload',
      label: 'Fotos',
      multiple: true
    },
    {
      formControlName: 'logo',
      type: 'upload',
      label: 'Logo',
      multiple: false
    },
  ],

  Standplatz: [
    {
      formControlName: 'standplatz',
      type: 'select',
      label: 'Standplatz auswählen',
      isRequired: true,
      options: [ 'klein', 'groß'],
    },
    {
      formControlName: 'table',
      type: 'select',
      label: 'Benötigte Tische',
      isRequired: true,
      options: ['1', '2'],
    },
    {
      formControlName: 'power',
      type: 'select',
      label: 'Strom',
      isRequired: true,
      options: ['ja', 'nein'],
    }
  ],

  Rechtliches: [
    {
      formControlName: 'ads',
      type: 'select',
      label: 'Werbung',
      isRequired: true,
      options: [ 'ja', 'nein'],
    },
    {
      formControlName: 'communication',
      type: 'select',
      label: 'Kommunikation über',
      options: ['WhatsApp', 'Email'],
    },
    {
      formControlName: 'newsletter',
      type: 'select',
      label: 'Newsletter',
      options: ['ja', 'nein'],
    }
  ]
};
