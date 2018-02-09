import { Component, OnInit } from '@angular/core';
import { navigationService } from '../services/data.service';
import {ActivatedRoute, RouterModule, Router} from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../classes/user';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css'],
  providers: [UserService, navigationService]
})
export class AdmindashboardComponent implements OnInit {

  currentT: boolean;

  UserM: User = new User;

  constructor(private navservice: navigationService, private router: Router, private users: UserService) { }

  ngOnInit() {
    if(localStorage.getItem('logged') === 'true'){
      this.users.currentUser.subscribe(currenu => this.UserM = currenu)
      this.navservice.currentTemplate.subscribe(curent => this.currentT = curent);
      this.router.navigateByUrl('/admindb');
      this.navservice.changeMessage(false);
      window.scrollTo(0, 0);
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
