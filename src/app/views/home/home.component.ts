import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Router } from '@angular/router';
import { Exhibitor } from '../../shared/interfaces/exhibitor.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imagesUpperRow: any[] = [];
  imagesLowerRow: any[] = [];
  exhibitors: Exhibitor[] = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2252&q=80',
      title: 'Aussteller Name',
      tags: ['Holz', 'Stoff', 'Schmuck']
    }
  ];
  subscriptions: any[] = [];

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
        this.exhibitors = data.slice(randomNum, (randomNum + 4));
      })
    );
  }

  routeToView(path: string): void {
    this.router.navigate([path]);
  }
}
