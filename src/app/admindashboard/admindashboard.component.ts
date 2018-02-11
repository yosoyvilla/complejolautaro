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
      this.navservice.currentTemplate.subscribe(curent => this.currentT = curent);
      this.router.navigateByUrl('/admindb');
      this.navservice.changeMessage(false);
      window.scrollTo(0, 0);
      this.UserM.email = localStorage.getItem('email');
      this.UserM.usertype = localStorage.getItem('ut');
      this.UserM.firstname = localStorage.getItem('firstname');
      this.UserM.lastname = localStorage.getItem('lastname');
      this.UserM.age = localStorage.getItem('age');
      this.UserM.gender = localStorage.getItem('gender');
      this.UserM.phone = localStorage.getItem('phone');
      this.UserM.created = localStorage.getItem('created');
      this.UserM.modified = localStorage.getItem('modified');
    }else{
      this.navservice.currentTemplate.subscribe(curent => this.currentT = curent);
      this.onLogOut();
    }
  }

  onLogOut(): void{
    localStorage.removeItem('email');
    localStorage.removeItem('ut');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
    localStorage.removeItem('age');
    localStorage.removeItem('gender');
    localStorage.removeItem('created');
    localStorage.removeItem('modified');
    localStorage.setItem('logged', 'false');
    this.router.navigateByUrl('/home');
    this.navservice.changeMessage(true);
    window.location.reload();
  }

}
