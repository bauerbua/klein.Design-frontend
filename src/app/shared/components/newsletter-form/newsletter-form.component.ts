import { Component, OnDestroy, ViewChild } from '@angular/core';
import { BaseService } from '../../services/base.service';
import { apiEndpoints } from '@assets/api/api.endpoints';
import { HttpEventType } from '@angular/common/http';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-newsletter-form',
  templateUrl: './newsletter-form.component.html',
  styleUrls: ['./newsletter-form.component.scss']
})
export class NewsletterFormComponent implements OnDestroy{
  email = '';
  response: string;
  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  subscription: Subscription;
  @ViewChild('f') form: any;

  constructor(private baseService: BaseService) { }

  onSubmit(): void {
    const requestOptions = {
      observe: 'events'
    };
    this.subscription = this.baseService.post<any>(apiEndpoints.NEWSLETTER, this.form.value, requestOptions).subscribe(
      event => {
        if (event.type === HttpEventType.Sent) {
          this.loading.next(true);
        } else if (event.type === HttpEventType.Response) {
          this.loading.next(false);
          this.response = 'Danke für Ihre Anmeldung!';
        }
      }, err => {
        this.loading.next(false);
        if (err.status === 500) {
          this.response = 'Diese Email existiert bereits.';
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
