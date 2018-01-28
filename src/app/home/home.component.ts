import { Component, OnInit } from '@angular/core';
import { Slider } from '../classes/slider';
import { SLIDERS } from '../mocks/mock-slider';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public sldrs = SLIDERS;
  public carouselBanner: NgxCarousel;

  constructor() { }

  ngOnInit() {

    this.carouselBanner = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 400,
      interval: 10000,
      point: {
        visible: true
      },
      load: 2,
      custom: 'banner',
      touch: true,
      loop: true
    };
  }

}
