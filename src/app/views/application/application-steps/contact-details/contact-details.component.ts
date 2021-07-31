import { Component, OnInit, Output, ViewChild, EventEmitter, OnDestroy } from '@angular/core';
import { Patterns } from '@shared/utilities/patterns';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {
  public patterns = Patterns;
  subscriptions = new Subscription();
  @ViewChild('form', { static: true }) ngForm: NgForm;
  @Output() contactDetailsChanged = new EventEmitter<any>();
  @Output() isValid = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.subscriptions.add(this.ngForm.form.valueChanges.subscribe((form) => {
      this.contactDetailsChanged.next(form);
      this.isValid.next(this.ngForm.form.valid);
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
