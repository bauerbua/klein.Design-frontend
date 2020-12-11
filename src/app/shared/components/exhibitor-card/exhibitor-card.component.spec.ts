import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitorCardComponent } from './exhibitor-card.component';

describe('ExhibitorCardComponent', () => {
  let component: ExhibitorCardComponent;
  let fixture: ComponentFixture<ExhibitorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitorCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
