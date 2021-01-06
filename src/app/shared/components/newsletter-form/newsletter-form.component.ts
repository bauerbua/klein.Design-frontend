import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseService } from '../../services/base.service';
import { apiEndpoints } from '../../../../assets/api/api.endpoints';

@Component({
  selector: 'app-newsletter-form',
  templateUrl: './newsletter-form.component.html',
  styleUrls: ['./newsletter-form.component.scss']
})
export class NewsletterFormComponent implements OnInit {
  email = '';
  response: string;
  @ViewChild('f') form: any;

  constructor(private baseService: BaseService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.baseService.post<any>(apiEndpoints.NEWSLETTER, this.form.value).subscribe(
      () => {
        this.response = 'Danke für Ihre Anmeldung!';
      }, err => {
        if (err.status === 500) {
          this.response = 'Diese Email existiert bereits';
        }
      }
    );
  }
}
