import { Component, OnDestroy, OnInit } from '@angular/core';
import { BrowserService } from '../../services/browser.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  isMobile: boolean;
  isOffset: boolean;
  active: boolean;

  constructor(private browserService: BrowserService) {
    this.subscriptions.push(this.browserService.isOffset.subscribe((res: boolean) => {
      this.isOffset = res;
    }));
    this.subscriptions.push(this.browserService.isMobile.subscribe((res: boolean) => {
      this.isMobile = res;
    }));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

}
