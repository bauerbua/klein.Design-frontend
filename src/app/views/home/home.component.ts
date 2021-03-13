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
  slideConfig = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          arrows: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true
        },
      }
      ],
  };

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.homeService.getImages().subscribe(images => {
        console.log(images);
        const imgs = images.impressionen;
        const randomNum = Math.floor(Math.random() * (imgs.length - 25));
        const selectedImgs = imgs.splice(randomNum, (randomNum + 25));
        const splitIndex = Math.round(selectedImgs.length / 2);
        this.imagesUpperRow = selectedImgs.splice(0, splitIndex);
        this.imagesLowerRow = selectedImgs;
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
