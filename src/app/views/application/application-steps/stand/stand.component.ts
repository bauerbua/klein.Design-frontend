import { Component, Output, EventEmitter } from '@angular/core';
import { StandApiInterface } from '@views/application/application-steps/stand/stand-api.interface';

@Component({
  selector: 'app-stand',
  templateUrl: './stand.component.html',
  styleUrls: ['./stand.component.scss']
})
export class StandComponent {
  @Output() selectionChanged = new EventEmitter<any>();
  @Output() isValid: EventEmitter<boolean> = new EventEmitter<boolean>();

  standSize = [
    {
      label: 'Kleiner Standplatz',
      icon: 'storefront',
      value: 'klein',
      price: 10,
      isSelected: false,
    },
    {
      label: 'Großer Standplatz',
      icon: 'store',
      value: 'gross',
      price: 20,
      isSelected: false,
    },
  ];
  tables = [
    {
      label: 'kein Tisch',
      value: 'null',
      price: 0,
      isSelected: false,
      isHidden: false
    },
    {
      label: '1',
      value: 'eins',
      price: 12,
      isSelected: false,
      isHidden: false
    },
    {
      label: '2',
      value: 'zwei',
      price: 35,
      isSelected: false,
      isHidden: false
    },
    {
      label: 'Stehtisch',
      value: 'stehtisch',
      price: 5,
      isSelected: false,
      isHidden: false
    }
  ];
  powerSelection = [
    {
      label: 'Nein',
      value: 'nein',
      icon: 'power_off',
      price: 0,
      isSelected: false,
    },
    {
      label: 'Ja',
      value: 'ja',
      icon: 'power',
      price: 3,
      isSelected: false,
    }
  ];
  total = 0;
  standValuesObject: StandApiInterface = {};

  selectStandSize(stand, i: number): void {
    this.standSize.map((item) => item.isSelected = false);
    this.standSize[i].isSelected = true;
    this.standValuesObject.groesse = stand.value;
    this.selectionChanged.next({standplatz: this.standValuesObject});
    const index = this.tables.findIndex((element) => element.value === 'zwei');
    this.tables[index].isHidden = !!(stand.value === 'klein' && index);
    if (this.tables[index].isHidden) {
      this.tables[index].isSelected = false;
    }
    this.calculatePrice();
    this.isValid.next(this.checkValidity());
  }

  selectTable(table, i: number): void {
    this.tables.map((item) => item.isSelected = false);
    this.tables[i].isSelected = true;
    this.standValuesObject.tische = table.value;
    this.selectionChanged.next({standplatz: this.standValuesObject});
    this.calculatePrice();
  }

  selectPower(power, i: number): void {
    this.powerSelection.map((item) => item.isSelected = false);
    this.powerSelection[i].isSelected = true;
    this.standValuesObject.strom = power.value;
    this.selectionChanged.next({standplatz: this.standValuesObject});
    this.calculatePrice();
    this.isValid.next(this.checkValidity());
  }

  calculatePrice(): void {
    const sum = [];
    if (this.standSize.find((el) => el.isSelected === true)) {
      sum.push(this.standSize.find((el) => el.isSelected === true).price);
    }
    if (this.tables.find((el) => el.isSelected === true)) {
      sum.push(this.tables.find((el) => el.isSelected === true).price);
    }
    if (this.powerSelection.find((el) => el.isSelected === true)) {
      sum.push(this.powerSelection.find((el) => el.isSelected === true).price);
    }
    this.total = sum.reduce((a, b) => a + b, 0);
    this.isValid.next(this.checkValidity());
  }

  checkValidity(): boolean {
    return (Object.keys(this.standValuesObject).length === 3);
  }

}
