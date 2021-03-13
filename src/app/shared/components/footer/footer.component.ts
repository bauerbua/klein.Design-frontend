import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer
  ) {
    matIconRegistry.addSvgIcon(
      `facebook`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/facebook.svg`)
    );
    matIconRegistry.addSvgIcon(
      `instagram`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/instagram.svg`)
    );
    matIconRegistry.addSvgIcon(
      `mail`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/mail.svg`)
    );
  }

  ngOnInit(): void {
  }

  openURL(url: string): void {
    window.open(url, '_blank');
  }

  sendMail(): void {
    window.location.href = 'mailto:info@kreativ-markt.at';
  }

}
