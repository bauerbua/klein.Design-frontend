import { Component, Input, OnInit } from '@angular/core';
import { Exhibitor } from '../../interfaces/exhibitor.interface';
import { Router } from '@angular/router';
import { BaseRoutes } from '../../../base.routes';

@Component({
  selector: 'app-exhibitor-card',
  templateUrl: './exhibitor-card.component.html',
  styleUrls: ['./exhibitor-card.component.scss']
})
export class ExhibitorCardComponent implements OnInit {
  @Input() exhibitor: Exhibitor;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeToView(id: number): void {
    this.router.navigate([BaseRoutes.EXHIBITORS, id]);
  }

  routeWithParam(tag: string): void {
    this.router.navigate([BaseRoutes.EXHIBITORS], {queryParams: {searchBy: tag}});
  }

}
