import { Component, OnInit } from '@angular/core';
import { Exhibitor } from '@shared/interfaces/exhibitor.interface';
import { BaseService } from '@shared/services/base.service';
import { apiEndpoints } from '@assets/api/api.endpoints';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exhibitors',
  templateUrl: './exhibitors.component.html',
  styleUrls: ['./exhibitors.component.scss']
})
export class ExhibitorsComponent implements OnInit {
  exhibitors: Exhibitor[] = [];
  searchValue: string;
  apiError: boolean;

  constructor(private baseService: BaseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.baseService.get<Exhibitor[]>(apiEndpoints.EXHIBITORS).subscribe(
      res => {
        this.exhibitors = res;
        this.apiError = false;
      }, () => {
        this.apiError = true;
      },
    );
    this.route.queryParams.subscribe(params => {
      this.searchValue = params.searchBy ? params.searchBy : undefined;
    });
  }

}
