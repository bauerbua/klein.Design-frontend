import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleBannerComponent } from './circle-banner.component';

describe('CircleBannerComponent', () => {
  let component: CircleBannerComponent;
  let fixture: ComponentFixture<CircleBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
