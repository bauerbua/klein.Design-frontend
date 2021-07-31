import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit, OnChanges {
  @ViewChild('form', { static: true }) ngForm: NgForm;
  @Output() companyDetailsChanged = new EventEmitter<any>();
  @Output() isValid = new EventEmitter<boolean>();
  @Input() availableOptions: {}[] = [];

  ngOnInit(): void {
    this.ngForm.form.valueChanges.subscribe((form) => {
      this.companyDetailsChanged.next(form);
      this.isValid.next(this.ngForm.form.valid);
    });
  }

  ngOnChanges(): void {
    if (this.availableOptions && this.availableOptions.length > 1) {
      this.availableOptions = this.availableOptions.sort((a: any, b: any) => a.tag.localeCompare(b.tag));
    }
  }


}
