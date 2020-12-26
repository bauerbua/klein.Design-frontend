import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { apiEndpoints } from '../../../assets/api/api.endpoints';
import { Observable } from 'rxjs';
import { Exhibitor } from '../../shared/interfaces/exhibitor.interface';

@Injectable()
export class HomeService {

  constructor(private baseService: BaseService) {
  }

  getExhibitors(): Observable<Exhibitor[]>{
    return this.baseService.get<Exhibitor[]>(apiEndpoints.EXHIBITORS);
  }

  getImages(): any {
    return this.baseService.get(apiEndpoints.IMAGES);
  }
}
