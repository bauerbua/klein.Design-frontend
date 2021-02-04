import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApplicationFormConfigs } from './application-form.config';
import { BaseService } from '../../shared/services/base.service';

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

  formArray: FormArray = new FormArray([]);

  constructor(private baseService: BaseService) {

  }

  getFormGroup(index: number): FormGroup {
    return this.formArray.controls[index] as FormGroup;
  }

  ngOnInit(): void {
    for (const config of Object.keys(ApplicationFormConfigs)) {
      this.forms.push(ApplicationFormConfigs[config]);
    }
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

  addInput(): void {
    console.log('add');
  }

  nextPage(): void {
    this.activeIndex ++;
  }

  previousPage(): void {
    this.activeIndex --;
  }

  sendApplication(): void {
    const reqBody = {};
    this.formArray.value.forEach(object => {
      Object.assign(reqBody, object);
    });
    /*this.baseService.post(apiEndpoints.EXHIBITORS, reqBody).subscribe(
      res => {
        console.log(res);
      }
    );*/
  }

}
