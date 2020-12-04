import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imagesUpperRow = [];
  imagesLowerRow = [];
  homeAusteller = [];
  subscriptions = [];

  constructor(private httpService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.httpService.getImages().subscribe(images => {
        const imgs = images.fotos;
        const randomNum = Math.floor(Math.random() * (imgs.length - 20));
        const selectedImgs = imgs.splice(randomNum, (randomNum + 20));
        const splitIndex = Math.round(selectedImgs.length / 2);
        this.imagesUpperRow = selectedImgs.splice(0, splitIndex);
        this.imagesLowerRow = selectedImgs;
      })
    );
    this.subscriptions.push(
      this.httpService.getExhibitors().subscribe(data => {
        const randomNum = Math.floor(Math.random() * (data.length - 4));
        this.homeAusteller = data.slice(randomNum, (randomNum + 4));
      })
    );
  }

  routeToView(path: string): void {
    this.router.navigate([path]);
  }
}
