import { Component, OnInit } from '@angular/core';
import { navigationService } from '../services/data.service';
import {ActivatedRoute, RouterModule, Router} from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../classes/user';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css'],
  providers: [UserService, navigationService]
})
export class UserdataComponent implements OnInit {

  registerForm = new FormGroup ({
    email: new FormControl(),
    pwd: new FormControl(),
    firstname: new FormControl(),
    lastname: new FormControl(),
    age: new FormControl(),
    gender: new FormControl(),
  });

  currentT: boolean;

  editUser: boolean = false;

  UserM: User = new User;

  constructor(private navservice: navigationService, private router: Router, private users: UserService) { }

  ngOnInit() {
    if(localStorage.getItem('logged') === 'true'){
      this.navservice.currentTemplate.subscribe(curent => this.currentT = curent);
      this.router.navigateByUrl('/userdata');
      this.navservice.changeMessage(false);
      window.scrollTo(0, 0);
      this.UserM.email = "email";
      this.UserM.usertype = "ut";
      this.UserM.firstname = "firstname";
      this.UserM.lastname = "lastname";
      this.UserM.age = "age";
      this.UserM.gender = "gender";
      this.UserM.created = "created";
      this.UserM.modified = "modified";
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
