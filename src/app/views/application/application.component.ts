import { Component, HostListener, OnInit } from '@angular/core';
import { BaseService } from '@shared/services/base.service';
import { apiEndpoints } from '@assets/api/api.endpoints';
import { LoaderService } from '@shared/services/loader.service';
import { HttpEventType } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SeoService } from '@shared/services/seo.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})

export class ApplicationComponent implements OnInit {
  availableOptions$: Observable<any[]>;
  requestData: FormData = new FormData();
  summaryObject = {};
  requestObject = {};

  isMobile: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.isMobile = (window.innerWidth <= 900);
  }

  constructor(
    private baseService: BaseService,
    private loaderService: LoaderService,
    private router: Router,
    private route: ActivatedRoute,
    private seoService: SeoService) {}

  ngOnInit(): void {
    this.isMobile = (window.innerWidth <= 900);
    const { meta } = this.route.snapshot.data;
    this.seoService.updateTitle(meta.title);
    this.seoService.updateDescription(meta.description);
    this.availableOptions$ = this.baseService.get(apiEndpoints.TAGS);
  }

  sendApplication(): void {
    this.requestData.delete('data');
    this.requestData.append('data', JSON.stringify(this.requestObject));
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
      }, (error) => {
        alert(`Ein Fehler ist aufgetreten: ${error.error.statusCode} ${error.error.message}`);
        this.loaderService.onDeactivateLoader();
      }
    );
  }

  applyValues(stepValues: {}, title: string): void {
    this.summaryObject[title] = stepValues;
    Object.assign(this.requestObject, stepValues);
  }

  applyPhotos(photos: any[], title): void {
    this.summaryObject[title] = {anzahl: photos.length};
    this.requestData.delete('files.fotos');
    photos.forEach((photo) => {
      console.log(photo);
      this.requestData.append('files.fotos', photo.file);
    });
  }
}
