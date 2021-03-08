import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openURL(url: string): void {
    window.open(url, '_blank');
  }

  sendMail(): void {
    window.location.href = 'mailto:info@kreativ-markt.at';
  }

}
