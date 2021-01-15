import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, fromEvent, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class BrowserService implements OnDestroy {
  subscriptions: Subscription[] = [];

  isOffset: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isMobile: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.checkMobile(window.innerWidth);
    this.subscriptions.push(fromEvent(window, 'scroll').subscribe((e) => {
      const scrollTop = (e.target as Document).scrollingElement.scrollTop;
      this.checkOffset(scrollTop);
    }));
    this.subscriptions.push(fromEvent(window, 'resize').subscribe((e) => {
      const screenWidth = (e.target as Window).window.innerWidth;
      this.checkMobile(screenWidth);
    }));
  }

  checkMobile(screenWidth: number): void {
    if (screenWidth <= 768) {
      this.isMobile.next(true);
    } else {
      this.isMobile.next(false);
    }
  }

  checkOffset(scrollTop: number): void {
    if (scrollTop >= 500 && !this.isOffset.value) {
      this.isOffset.next(true);
    } else {
      this.isOffset.next(false);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
