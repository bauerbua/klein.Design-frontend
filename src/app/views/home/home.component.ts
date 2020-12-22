import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exhibitor } from '../../shared/interfaces/exhibitor.interface';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  imagesUpperRow: any[] = [];
  imagesLowerRow: any[] = [];
  exhibitors: Exhibitor[] = [];
  subscriptions: any[] = [];

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.homeService.getImages().subscribe(images => {
        const imgs = images.images;
        const randomNum = Math.floor(Math.random() * (imgs.length - 20));
        const selectedImgs = imgs.splice(randomNum, (randomNum + 20));
        const splitIndex = Math.round(selectedImgs.length / 2);
        this.imagesUpperRow = selectedImgs.splice(0, splitIndex);
        this.imagesLowerRow = selectedImgs;
        console.log(this.imagesLowerRow, this.imagesUpperRow);
      })
    );
    this.subscriptions.push(
      this.homeService.getExhibitors().subscribe(data => {
        const randomNum = Math.floor(Math.random() * (data.length - 4));
        this.exhibitors = data.slice(randomNum, (randomNum + 4));
      })
    );
  }

  routeToView(path: string): void {
    this.router.navigate([path]);
  }
}
