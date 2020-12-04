import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}


  getImages(): any  {
    console.log('getImages');
  }

  getExhibitors(): any {
    console.log('getExhibitors');
  }

  getOneExhibitor(id): any {
    console.log('getOneExhibitor');
  }

  subscribeToNewsletter(email): any  {
    console.log('subscribeToNewsletter');
  }
}
