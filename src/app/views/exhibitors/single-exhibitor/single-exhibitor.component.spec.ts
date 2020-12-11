import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleExhibitorComponent } from './single-exhibitor.component';

describe('SingleExhibitorComponent', () => {
  let component: SingleExhibitorComponent;
  let fixture: ComponentFixture<SingleExhibitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleExhibitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleExhibitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
