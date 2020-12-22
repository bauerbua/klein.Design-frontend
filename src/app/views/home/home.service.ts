import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { apiEndpoints } from '../../../assets/api/api.endpoints';

@Injectable()
export class HomeService {

  constructor(private baseService: BaseService) {
  }

  getExhibitors(): any {
    return this.baseService.get(apiEndpoints.EXHIBITORS);
  }

  getImages(): any {
    return this.baseService.get(apiEndpoints.IMAGES);
  }
}
