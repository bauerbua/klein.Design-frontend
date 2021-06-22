import { Component, OnInit } from '@angular/core';
import { Exhibitor } from '@shared/interfaces/exhibitor.interface';
import { BaseService } from '@shared/services/base.service';
import { apiEndpoints } from '@assets/api/api.endpoints';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SeoService } from '@shared/services/seo.service';

@Component({
  selector: 'app-exhibitors',
  templateUrl: './exhibitors.component.html',
  styleUrls: ['./exhibitors.component.scss']
})
export class ExhibitorsComponent implements OnInit {
  exhibitors$: Observable<Exhibitor[]>;
  loadingError$ = new Subject<boolean>();
  searchValue: string;
  apiError: boolean;

  constructor(
    private baseService: BaseService,
    private route: ActivatedRoute,
    private seoService: SeoService,
    ) { }

  ngOnInit(): void {
    const { meta } = this.route.snapshot.data;
    this.seoService.updateTitle(meta.title);
    this.seoService.updateDescription(meta.description);
    this.exhibitors$ = this.baseService.get<Exhibitor[]>(apiEndpoints.EXHIBITORS).pipe(
      catchError((error) => {
        console.error(error);
        this.loadingError$.next(true);
        return of<Exhibitor[]>();
      })
    );
    this.route.queryParams.subscribe(params => {
      this.searchValue = params.searchBy ? params.searchBy : undefined;
    });
  }

}
