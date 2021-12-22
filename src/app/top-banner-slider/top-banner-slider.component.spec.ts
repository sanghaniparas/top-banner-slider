import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBannerSliderComponent } from './top-banner-slider.component';

describe('TopBannerSliderComponent', () => {
  let component: TopBannerSliderComponent;
  let fixture: ComponentFixture<TopBannerSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBannerSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBannerSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
