import { Component, OnInit } from '@angular/core';
import { TopBannerSlider } from '../shared/model/topbannerslider';
import { SharepointService } from '../shared/services/sharepoint.service';
declare var $;

@Component({
  selector: 'app-top-banner-slider',
  templateUrl: './top-banner-slider.component.html',
  styleUrls: ['./top-banner-slider.component.css']
})
export class TopBannerSliderComponent implements OnInit {
  topBannerSlider: TopBannerSlider[] = [];

  constructor(public sharepointService:SharepointService) { }

  ngOnInit(): void {
    this.getTopBannerSlider();
  }
  getTopBannerSlider() {
    this.sharepointService.getTopBannerSliderData().then((res: any) => {
      this.topBannerSlider = res;
    }).catch((err) => {
      console.log("Error to get topBannerSlider",err);
    });
  }

}
