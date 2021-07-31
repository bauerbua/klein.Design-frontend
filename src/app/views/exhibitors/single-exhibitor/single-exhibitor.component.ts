import { Component, OnInit } from '@angular/core';
import { BaseService } from '@shared/services/base.service';
import { Exhibitor } from '@shared/interfaces/exhibitor.interface';
import { apiEndpoints } from '@assets/api/api.endpoints';
import { ActivatedRoute } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-single-exhibitor',
  templateUrl: './single-exhibitor.component.html',
  styleUrls: ['./single-exhibitor.component.scss']
})
export class SingleExhibitorComponent implements OnInit {
  exhibitor$: Observable<Exhibitor>;
  loadingError$ = new Subject<boolean>();

  constructor(
    private baseService: BaseService,
    private route: ActivatedRoute,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    matIconRegistry.addSvgIcon(
      `twitter`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/twitter.svg`)
    );
    matIconRegistry.addSvgIcon(
      `facebook`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/facebook.svg`)
    );
    matIconRegistry.addSvgIcon(
      `instagram`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/instagram.svg`)
    );
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.exhibitor$ = this.baseService.get<Exhibitor>(apiEndpoints.EXHIBITORS + '/' + id).pipe(
      catchError((error) => {
        console.error(error);
        this.loadingError$.next(true);
        return of<Exhibitor>();
      })
    );
  }

}
