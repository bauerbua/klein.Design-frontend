import { Component, OnInit } from '@angular/core';
import { Exhibitor } from '../../shared/interfaces/exhibitor.interface';

@Component({
  selector: 'app-exhibitors',
  templateUrl: './exhibitors.component.html',
  styleUrls: ['./exhibitors.component.scss']
})
export class ExhibitorsComponent implements OnInit {
  exhibitors: Exhibitor[] = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2252&q=80',
      title: 'Aussteller Name',
      tags: ['Holz', 'Stoff', 'Schmuck']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
