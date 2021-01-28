import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

export interface FormConfig {
  formControlName: string;
  type: string;
  label: string;
  isRequired?: boolean;
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
      isRequired: true,
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
      isRequired: true,
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
      type: 'text',
      label: 'Kategorien'
    },
    {
      formControlName: 'categories',
      type: 'textarea',
      label: 'Beschreibung'
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
  formConfig3: FormConfig[] = [];
  formConfig4: FormConfig[] = [
    {
      formControlName: 'standplatz',
      type: 'select',
      label: 'Standplatz auswählen'
    },
    {
      formControlName: 'tisch',
      type: 'select',
      label: 'Benötigte Tische'
    },
    {
      formControlName: 'strom',
      type: 'select',
      label: 'Strom'
    }
  ];
  formConfig5: FormConfig[] = [];

  formArray: FormArray = new FormArray([]);

  select;

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
    this.items = [
      {
        label: 'Kontaktdaten',
        command: (event: any) => {
          this.activeIndex = 0;
        }
      },
      {
        label: 'Produkte & Angebot',
        command: (event: any) => {
          this.activeIndex = 1;
        }
      },
      {
        label: 'Foto-Upload',
        command: (event: any) => {
          this.activeIndex = 2;
        }
      },
      {
        label: 'Standplatz',
        command: (event: any) => {
          this.activeIndex = 3;
        }
      },
      {
        label: 'Von Rechts Wegen',
        command: (event: any) => {
          this.activeIndex = 4;
        }
      }
    ];
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
    console.log(this.formArray);
  }

  previousPage(): void {
    this.activeIndex --;
  }

}
