import { Component, OnInit } from '@angular/core';
import { BrowserService } from '../../services/browser.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isMobile: boolean;
  isOffset: boolean;
  active;

  constructor(private browserService: BrowserService) {
    this.browserService.isOffset.subscribe((res: boolean) => {
      this.isOffset = res;
    });
    this.browserService.isMobile.subscribe((res: boolean) => {
      this.isMobile = res;
    });
  }

  ngOnInit(): void {
  }

}
