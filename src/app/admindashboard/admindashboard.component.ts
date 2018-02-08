import { Component, OnInit } from '@angular/core';
import { navigationService } from '../services/data.service';
import {ActivatedRoute, RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  currentT: boolean;

  constructor(private navservice: navigationService, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('logged') === 'true'){
      this.navservice.currentTemplate.subscribe(curent => this.currentT = curent);
      this.router.navigateByUrl('/admindb');
      this.navservice.changeMessage(false);
    }else{
      this.navservice.currentTemplate.subscribe(curent => this.currentT = curent);
      this.onLogOut();
    }
  }

  onLogOut(): void{
    localStorage.setItem('logged', 'false');
    this.router.navigateByUrl('/home');
    this.navservice.changeMessage(true);
    window.location.reload();
  }

}
