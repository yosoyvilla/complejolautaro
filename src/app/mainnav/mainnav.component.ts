import { Component, OnInit, Input } from '@angular/core';
import { navigation } from '../classes/nav';
import { NAVTABS } from '../mocks/mock-nav';
import { navigationService } from '../services/data.service';

@Component({
  selector: 'app-mainnav',
  templateUrl: './mainnav.component.html',
  styleUrls: ['./mainnav.component.css'],
  providers: [navigationService]
})
export class MainnavComponent implements OnInit {

  navTab: string;

  @Input() public selectedNav: navigation = NAVTABS[0];

  constructor(private navtabs: navigationService) { }

  ngOnInit() {
  }

}
