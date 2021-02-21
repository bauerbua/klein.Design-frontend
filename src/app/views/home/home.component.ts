import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exhibitor } from '../../shared/interfaces/exhibitor.interface';
import { HomeService } from './home.service';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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
  breakpoints: {
    768: {
      slidesPerView: 1
    },
    1000: {
      slidesPerView: 2
    },
    1300: {
      slidesPerView: 3
    },
    2000: {
      slidesPerView: 4
    }
  };

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.homeService.getImages().subscribe(images => {
        const imgs = images.images;
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

  onSwiper(e): void {
    console.log(e);
  }

  onSlideChange(): void {
    console.log('sile');
  }
}
