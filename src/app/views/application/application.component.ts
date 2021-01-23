import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  items;
  activeIndex = 0;
  form1: FormGroup;
  form2: FormGroup;

  form1Config = [
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
  form2Config = [
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

  constructor(private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.form1 = new FormGroup(this.generateForm(this.form1Config));
    this.form2 = new FormGroup(this.generateForm(this.form2Config));
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
  }

  previousPage(): void {
    this.activeIndex --;
  }

}
