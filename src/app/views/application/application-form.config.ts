import { Patterns } from '../../shared/utilities/patterns';

export const ApplicationFormConfigs = {
  Kontaktdaten: [
    {
      formControlName: 'vorname',
      type: 'text',
      label: 'Vorname',
      // isRequired: true
    },
    {
      formControlName: 'nachname',
      type: 'text',
      label: 'Nachname',
      // isRequired: true
    },
    {
      formControlName: 'email',
      type: 'email',
      label: 'Email',
      // isRequired: true,
      pattern: Patterns.email
    },
    {
      formControlName: 'telefonnummer',
      type: 'text',
      label: 'Telefonnummer',
      // isRequired: true,
    },
    {
      formControlName: 'adresse',
      type: 'text',
      label: 'Rechnungsadresse',
      placeholder: 'Anschrift, PLZ Stadt'
      // isRequired: true,
    }
  ],

  Angebot: [
    {
      formControlName: 'firmenname',
      type: 'text',
      label: 'Firmenname',
      // isRequired: true
    },
    {
      formControlName: 'tags',
      type: 'tags',
      label: 'Tags',
      // isRequired: true,
      multiple: true,
    },
    {
      formControlName: 'beschreibung',
      type: 'textarea',
      label: 'Beschreibung',
      // isRequired: true
    },
    {
      formControlName: 'links',
      type: 'formGroup',
      label: 'Soziale Medien',
      controls: [
        {
          formControlName: 'instagram',
          type: 'text',
          label: 'Instagram',
        },
        {
          formControlName: 'facebook',
          type: 'text',
          label: 'Facebook'
        },
        {
          formControlName: 'webseite',
          type: 'text',
          label: 'Webseite'
        },
      ]
    }
  ],

  Fotos: [
    {
      formControlName: 'fotos',
      type: 'upload',
      label: 'Fotos',
      multiple: true,
      // isRequired: true,
    },
  ],

  Standplatz: [
    {
      formControlName: 'standplatz',
      type: 'formGroup',
      label: 'Standplatz',
      controls: [
        {
          formControlName: 'standplatz',
          type: 'select',
          label: 'Größe',
          // isRequired: true,
          options: [ 'klein - (10€)', 'groß - (20€)'],
        },
        {
          formControlName: 'table',
          type: 'select',
          label: 'Tische',
          // isRequired: true,
          options: ['0', '1 - (12€)', '2 - (35€)', 'Stehtisch - (5€)'],
        },
        {
          formControlName: 'power',
          type: 'select',
          label: 'Strom',
          // isRequired: true,
          options: ['ja, (3€)', 'nein'],
        }
      ]
    }
  ],

  Rechtliches: [
    {
      formControlName: 'ads',
      type: 'checkbox',
      label: 'Meine Inhalte dürfen für Werbezwecke verwendet werden',
      // isRequired: true
    },
    {
      formControlName: 'newsletter',
      type: 'checkbox',
      label: 'Anmelden zum Aussteller newsletter',
    }
  ]
};
