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
  availableOptions;

  formArray: FormArray = new FormArray([]);
  formLabels: string[] = [];
  requestData: FormData = new FormData();

  constructor(private baseService: BaseService) {}

  ngOnInit(): void {
    for (const config of Object.keys(ApplicationFormConfigs)) {
      this.formLabels.push(config);
      this.forms.push(ApplicationFormConfigs[config]);
    }
    this.forms.forEach(config => {
      this.formArray.push(new FormGroup(this.generateForm(config)));
    });
    this.baseService.get(apiEndpoints.TAGS).subscribe(res => {
      this.availableOptions = res;
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

  onFileSelected(e): void {
    const filesList = e.target.files;
    for (const file of filesList) {
      this.requestData.append('files.titelbild', file, file.name);
    }
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
          if (Array.isArray(object[key])) {
            const index = summaryArray.findIndex(obj => obj.formControlName === key);
            summaryArray[index].value = object[key].map(obj => obj.tag);
          } else {
            const index = summaryArray.findIndex(obj => obj.formControlName === key);
            summaryArray[index].value = value;
          }
        }
      });
      this.summaryArray = summaryArray;
      this.summary = true;
    }
  }

  sendApplication(): void {
    const reqBody = {};
    this.formArray.value.forEach(object => {
      Object.assign(reqBody, object);
    });
    this.requestData.append('data', JSON.stringify(reqBody));

    this.baseService.post(apiEndpoints.EXHIBITORS, this.requestData).subscribe(
      res => {
        console.log(res);
      }, err => {
        console.log(err);
      }
    );
  }

}
