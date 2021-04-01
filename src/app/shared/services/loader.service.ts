import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class LoaderService {
  showLoader: Subject<boolean> = new Subject<boolean>();

  onActivateLoader(): void {
    this.showLoader.next(true);
  }

  onDeactivateLoader(): void {
    this.showLoader.next(false);
  }
}
