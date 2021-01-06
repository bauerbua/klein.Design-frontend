import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../../shared/services/base.service';
import { Exhibitor } from '../../../shared/interfaces/exhibitor.interface';
import { apiEndpoints } from '../../../../assets/api/api.endpoints';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-exhibitor',
  templateUrl: './single-exhibitor.component.html',
  styleUrls: ['./single-exhibitor.component.scss']
})
export class SingleExhibitorComponent implements OnInit {
  exhibitor: Exhibitor;

  constructor(private baseService: BaseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.baseService.get<Exhibitor>(apiEndpoints.EXHIBITORS + '/' + id).subscribe(
      res => {
        this.exhibitor = res;
      }
    );
  }

}
