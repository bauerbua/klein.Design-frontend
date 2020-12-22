import { Component, OnInit } from '@angular/core';
import { Exhibitor } from '../../shared/interfaces/exhibitor.interface';

@Component({
  selector: 'app-exhibitors',
  templateUrl: './exhibitors.component.html',
  styleUrls: ['./exhibitors.component.scss']
})
export class ExhibitorsComponent implements OnInit {
  exhibitors: Exhibitor[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
