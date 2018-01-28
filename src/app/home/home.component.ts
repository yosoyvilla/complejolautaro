import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Slider } from '../classes/slider';
import { SLIDERS } from '../mocks/mock-slider';
import { NgxCarousel } from 'ngx-carousel';
import { navigationService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [navigationService]
})
export class HomeComponent implements OnInit {

  navTab: string;

  public sldrs = SLIDERS;
  public carouselBanner: NgxCarousel;

  constructor(private navtabs: navigationService) { }

  ngOnInit() {

    this.navtabs.currentTab.subscribe(navTab => this.navTab = navTab)

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
