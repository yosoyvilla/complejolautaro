import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  images;

  constructor() {
    this.images = [
      {"url":"/assets/images/portfolio/fullsize/1.jpg"},
      {"url":"/assets/images/portfolio/fullsize/1.jpg"},
      {"url":"/assets/images/portfolio/fullsize/1.jpg"},
      {"url":"/assets/images/portfolio/fullsize/1.jpg"}
      ];
  }

  ngOnInit() {
  }

}
