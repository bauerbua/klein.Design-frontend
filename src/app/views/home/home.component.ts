import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exhibitor } from '@shared/interfaces/exhibitor.interface';
import { HomeService } from './home.service';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit, OnDestroy {
  imagesUpperRow: any[] = [];
  imagesLowerRow: any[] = [];
  exhibitors$: Observable<Exhibitor[]>;
  loadingError$ = new Subject<boolean>();
  subscriptions: Subscription[] = [];

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.homeService.getImages().subscribe(images => {
        const suffledImgs = images.impressionen.sort(() => 0.5 - Math.random());
        const selectedImgs = suffledImgs.slice(0, 30);
        const splitIndex = Math.round(selectedImgs.length / 2);
        this.imagesUpperRow = selectedImgs.splice(0, splitIndex);
        this.imagesLowerRow = selectedImgs;
      })
    );
    this.exhibitors$ = this.homeService.getExhibitors().pipe(
      map(exhibitors => {
        return exhibitors.sort(() => 0.5 - Math.random()).slice(0, 4);
      }),
      catchError(error => {
        console.error(error);
        this.loadingError$.next(true);
        return of<Exhibitor[]>();
      })
    );
  }

  routeToView(path: string): void {
    this.router.navigate([path]);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
