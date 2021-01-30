import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

export interface FormConfig {
  formControlName: string;
  type: string;
  label: string;
  isRequired?: boolean;
  options?: any;
  multiple?: boolean;
}

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})

export class ApplicationComponent implements OnInit {
  items;
  activeIndex = 0;
  forms: FormConfig[][] = [];
  formConfig1: FormConfig[] = [
    {
      formControlName: 'firstname',
      type: 'text',
      label: 'Vorname',
      isRequired: true,
    },
    {
      formControlName: 'lastname',
      type: 'text',
      label: 'Nachname',
      isRequired: true,
    },
    {
      formControlName: 'email',
      type: 'email',
      label: 'Email',
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
  ];
  formConfig2: FormConfig[] = [
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
      options: ['Stoff', 'Holz']
    },
    {
      formControlName: 'description',
      type: 'textarea',
      label: 'Beschreibung',
    },
    {
      formControlName: 'facebook',
      type: 'text',
      label: 'Facebook'
    },
    {
      formControlName: 'twitter',
      type: 'text',
      label: 'Twitter'
    },
    {
      formControlName: 'Website',
      type: 'text',
      label: 'Website'
    },
  ];
  formConfig3: FormConfig[] = [
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
  ];
  formConfig4: FormConfig[] = [
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
  ];
  formConfig5: FormConfig[] = [
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
      isRequired: true,
      options: ['WhatsApp', 'Email'],
    },
    {
      formControlName: 'newsletter',
      type: 'select',
      label: 'Newsletter',
      isRequired: true,
      options: ['ja', 'nein'],
    }
  ];

  formArray: FormArray = new FormArray([]);

  constructor() {

  }

  getFormGroup(index: number): FormGroup {
    return this.formArray.controls[index] as FormGroup;
  }

  ngOnInit(): void {
    this.forms.push(this.formConfig1);
    this.forms.push(this.formConfig2);
    this.forms.push(this.formConfig3);
    this.forms.push(this.formConfig4);
    this.forms.push(this.formConfig5);
    this.forms.forEach(config => {
      this.formArray.push(new FormGroup(this.generateForm(config)));
    });
  }

  generateForm(formConfig: any[]): {} {
    const group = {};
    formConfig.forEach(input => {
      const required = (input.isRequired) ? [Validators.required] : null;
      const disabled = (input.isDisabled) ? {value: '', disabled: true} : '';
      group[input.formControlName] = new FormControl(disabled, required);
    });
    return group;
  }

  nextPage(): void {
    this.activeIndex ++;
  }

  previousPage(): void {
    this.activeIndex --;
  }

}
