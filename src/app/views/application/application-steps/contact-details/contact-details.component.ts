import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Patterns } from '@shared/utilities/patterns';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  public patterns = Patterns;
  @ViewChild('form', { static: true }) ngForm: NgForm;
  @Output() contactDetailsChanged = new EventEmitter<any>();

  ngOnInit(): void {
    this.ngForm.form.valueChanges.subscribe((form) => {
      this.contactDetailsChanged.next(form);
    });
  }

}
