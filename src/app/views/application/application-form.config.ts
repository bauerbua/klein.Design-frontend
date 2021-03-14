import { Patterns } from '../../shared/utilities/patterns';

export const ApplicationFormConfigs = {
  Kontaktdaten: [
    {
      formControlName: 'vorname',
      type: 'text',
      label: 'Vorname',
      isRequired: true
    },
    {
      formControlName: 'nachname',
      type: 'text',
      label: 'Nachname',
      isRequired: true
    },
    {
      formControlName: 'email',
      type: 'email',
      label: 'Email',
      isRequired: true,
      pattern: Patterns.email
    },
    {
      formControlName: 'phone',
      type: 'number',
      label: 'Telefonnummer',
      isDisabled: true
    },
    {
      formControlName: 'address',
      type: 'text',
      label: 'Adresse',
      isDisabled: true
    }
  ],

  Angebot: [
    {
      formControlName: 'titel',
      type: 'text',
      label: 'Firmenname',
      isRequired: true
    },
    {
      formControlName: 'tags',
      type: 'tags',
      label: 'Tags',
      isRequired: true,
      multiple: true,
    },
    {
      formControlName: 'beschreibung',
      type: 'textarea',
      label: 'Beschreibung',
      required: true
    },
    {
      formControlName: 'sozial',
      type: 'select',
      label: 'Soziale Medien',
      multiple: true,
      options: ['facebook', 'twitter', 'instagram', 'website']
    }
  ],

  Fotos: [
    {
      formControlName: 'titelbild',
      type: 'upload',
      label: 'Titlebild',
      multiple: false
    },
    {
      formControlName: 'fotos',
      type: 'upload',
      label: 'Fotos',
      multiple: true
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
