import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  items;
  activeIndex = 0;
  form1: FormGroup;

  constructor(private messageService: MessageService, private fb: FormBuilder) {
    this.form1 = this.fb.group({
      vorname: [],
      nachname: [],
      email: [],
      telefonnummer: [],
      adresse: []
    });
  }

  ngOnInit(): void {
    this.items = [{
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


}
