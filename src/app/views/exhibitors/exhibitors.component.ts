import { Component, OnInit } from '@angular/core';
import { Exhibitor } from '@shared/interfaces/exhibitor.interface';
import { BaseService } from '@shared/services/base.service';
import { apiEndpoints } from '@assets/api/api.endpoints';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

  constructor(private baseService: BaseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
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
