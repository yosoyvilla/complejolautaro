import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { navigationService } from './services/data.service';
import {ActivatedRoute, RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [navigationService]
})
export class AppComponent implements OnInit {

  currentT: boolean;

  constructor(private navservice: navigationService, private router: Router) { }

  ngOnInit() {
  if(localStorage.getItem('logged') === 'true'){
    this.navservice.currentTemplate.subscribe(curent => this.currentT = curent);
    this.router.navigateByUrl('/admindb');
    this.navservice.changeMessage(false);
  }else{
    this.navservice.currentTemplate.subscribe(curent => this.currentT = curent);
  }
  }

  title = 'Complejo Lautaro';
}
