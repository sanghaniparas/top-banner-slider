import { Injectable } from '@angular/core';
import pnp from '@pnp/pnpjs';
import { Constant } from 'src/app/app.constant';
import { TopBannerSlider } from '../model/topbannerslider';

@Injectable({
  providedIn: 'root'
})
export class SharepointService {

  constructor() { }

  getTopBannerSliderData(): Promise<TopBannerSlider[]> {
    return new Promise((resolve, reject) => {
      pnp.sp.web.lists
        .getByTitle(Constant.TOP_BANNER_SLIDER)
        .items.select("*")
        .get()
        .then((result) => {
          resolve(result);
        })
        .catch(err => reject(err));
    });
  }
}
