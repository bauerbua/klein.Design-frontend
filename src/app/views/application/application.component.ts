import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApplicationFormConfigs } from './application-form.config';

export interface FormConfig {
  formControlName: string;
  type: string;
  label: string;
  isRequired?: boolean;
  options?: any;
  multiple?: boolean;
  pattern?: string;
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
  summary = false;
  applicationObj = {};

  formArray: FormArray = new FormArray([]);
  formLabels: string[] = [];

  constructor() {

  }

  ngOnInit(): void {
    for (const config of Object.keys(ApplicationFormConfigs)) {
      this.formLabels.push(config);
      this.forms.push(ApplicationFormConfigs[config]);
    }
    this.forms.forEach(config => {
      this.formArray.push(new FormGroup(this.generateForm(config)));
    });
  }

  getFormGroup(index: number): FormGroup {
    return this.formArray.controls[index] as FormGroup;
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

  addInput(): void {
    console.log('add');
  }

  nextPage(): void {
    this.activeIndex ++;
  }

  previousPage(): void {
    this.activeIndex --;
  }

  showSummary(): void {
    this.formArray.value.forEach(object => {
      Object.assign(this.applicationObj, object);
    });
    this.summary = true;
  }

  sendApplication(): void {
    this.formArray.value.forEach(object => {
      Object.assign(this.applicationObj, object);
    });
    /*this.baseService.post(apiEndpoints.EXHIBITORS, reqBody).subscribe(
      res => {
        console.log(res);
      }
    );*/
  }

}
