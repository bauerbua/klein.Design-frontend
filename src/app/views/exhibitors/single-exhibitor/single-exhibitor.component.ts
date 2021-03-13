import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../../shared/services/base.service';
import { Exhibitor } from '../../../shared/interfaces/exhibitor.interface';
import { apiEndpoints } from '../../../../assets/api/api.endpoints';
import { ActivatedRoute } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-single-exhibitor',
  templateUrl: './single-exhibitor.component.html',
  styleUrls: ['./single-exhibitor.component.scss']
})
export class SingleExhibitorComponent implements OnInit {
  exhibitor: Exhibitor;

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
    this.baseService.get<Exhibitor>(apiEndpoints.EXHIBITORS + '/' + id).subscribe(
      res => {
        console.log(res);
        this.exhibitor = res;
      }
    );
  }

}
