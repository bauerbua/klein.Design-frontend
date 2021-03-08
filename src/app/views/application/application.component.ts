import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApplicationFormConfigs } from './application-form.config';
import { BaseService } from '../../shared/services/base.service';
import { apiEndpoints } from '../../../assets/api/api.endpoints';

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
  forms: FormConfig[][] = [];
  summary = false;
  summaryArray = [];

  formArray: FormArray = new FormArray([]);
  formLabels: string[] = [];

  constructor(private baseService: BaseService) {}

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

  showSummary(stepIndex): void {
    if (stepIndex === 5) {
      let summaryArray = [];
      this.forms.forEach(form => {
        const mappedArray = form.map(obj => {
          return {
            label: obj.label,
            formControlName: obj.formControlName,
            value: ''
          };
        });
        summaryArray = summaryArray.concat(mappedArray);
      });
      this.formArray.value.forEach(object => {
        for (const [key, value] of Object.entries(object)) {
          const index = summaryArray.findIndex(obj => obj.formControlName === key);
          summaryArray[index].value = value;
        }
      });
      this.summaryArray = summaryArray;
      this.summary = true;
    }
  }

  sendApplication(): void {
    let reqBody = {};
    console.log(this.formArray.value);
    this.formArray.value.forEach(object => {
      reqBody = Object.assign(reqBody, object);
    });
    console.log(reqBody);
    this.baseService.post(apiEndpoints.EXHIBITORS, reqBody).subscribe(
      res => {
        console.log(res);
      }
    );
  }

}
