import { Patterns } from '../../shared/utilities/patterns';

export const ApplicationFormConfigs = {
  Kontaktdaten: [
    {
      formControlName: 'owner',
      type: 'text',
      label: 'Ganzer Name',
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
      formControlName: 'tags',
      type: 'select',
      label: 'Tags',
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
      isRequired: false,
      options: [ 'klein', 'groß'],
    },
    {
      formControlName: 'table',
      type: 'select',
      label: 'Tische',
      isRequired: false,
      options: ['1', '2'],
    },
    {
      formControlName: 'power',
      type: 'select',
      label: 'Strom',
      isRequired: false,
      options: ['ja', 'nein'],
    }
  ],

  Rechtliches: [
    {
      formControlName: 'ads',
      type: 'select',
      label: 'Werbung',
      isRequired: false,
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
