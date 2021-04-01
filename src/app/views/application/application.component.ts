import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApplicationFormConfigs } from './application-form.config';
import { BaseService } from '../../shared/services/base.service';
import { apiEndpoints } from '../../../assets/api/api.endpoints';
import { LoaderService } from '../../shared/services/loader.service';
import { HttpEventType } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

export interface FormConfig {
  formControlName: string;
  type: string;
  label: string;
  isRequired?: boolean;
  placeholder: string;
  controls?: FormConfig[];
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
  summaryArray: any[] = [];
  availableOptions;

  images: any[] = [];

  formArray: FormArray = new FormArray([]);
  formLabels: string[] = [];
  requestData: FormData = new FormData();

  constructor(
    private baseService: BaseService,
    private loaderService: LoaderService,
    private router: Router,
    private route: ActivatedRoute) {}

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
      if (input.hasOwnProperty('controls')) {
        group[input.formControlName] = new FormGroup({});
        input.controls.forEach( control => {
          const required = (control.isRequired) ? [Validators.required] : null;
          const disabled = (control.isDisabled) ? {value: '', disabled: true} : '';
          group[input.formControlName].addControl(control.formControlName, new FormControl(disabled, required));
        });
      } else {
        const required = (input.isRequired) ? [Validators.required] : null;
        const disabled = (input.isDisabled) ? {value: '', disabled: true} : '';
        group[input.formControlName] = new FormControl(disabled, required);
      }
    });
    return group;
  }

  onImgSelected(e): void {
    const filesList = e.target.files;
    for (const file of filesList) {
      const reader = new FileReader();
      reader.onload = () => {
        if (!this.images.includes(file)) {
          this.images.push({file, imgSrc: reader.result});
        }
      };
      reader.readAsDataURL(file);
    }
  }

  onRemoveImg(file): void {
    const index = this.images.indexOf(file);
    this.images.splice(index, 1);
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
    this.requestData.delete('data');
    this.requestData.delete('files.fotos');
    if (this.formArray.valid) {
      const data = {};
      this.formArray.value.forEach(object => {
        Object.assign(data, object);
      });
      this.requestData.append('data', JSON.stringify(data));
      this.images.forEach(img => {
        console.log(img);
        this.requestData.append('files.fotos', img.file, img.file.name);
      });
    }
    const requestOptions = {
      observe: 'events'
    };
    this.baseService.post<any>(apiEndpoints.EXHIBITORS, this.requestData, requestOptions).subscribe(
      event => {
        if (event.type === HttpEventType.Sent) {
          this.loaderService.onActivateLoader();
        }
        if (event.type === HttpEventType.Response) {
          this.loaderService.onDeactivateLoader();
          this.router.navigate(['geschafft'], {relativeTo: this.route});
        }
      }, err => {
        console.log(err);
        this.loaderService.onDeactivateLoader();
      }
    );
  }
}
