import { Component, OnInit } from '@angular/core';
import { navigationService } from '../services/data.service';
import {ActivatedRoute, RouterModule, Router} from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../classes/user';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from "../services/auth.service";

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css'],
  providers: [UserService, navigationService, ApiService]
})
export class UserdataComponent implements OnInit {

  updateForm = new FormGroup ({
    email: new FormControl(),
    password: new FormControl(),
    firstname: new FormControl(),
    lastname: new FormControl(),
    age: new FormControl(),
    gender: new FormControl(),
    phone: new FormControl()
  });

  currentT: boolean;

  errorMessage: string = "Por favor no deje espacios en blanco. Ingrese su password si no lo esta cambiando";

  errorSaving: boolean = false;

  editUser: boolean = false;

  UserM: User = new User;

  constructor(private navservice: navigationService, private router: Router, private users: UserService, private auth: ApiService) { }

  ngOnInit() {
    if(localStorage.getItem('logged') === 'true'){
      this.navservice.currentTemplate.subscribe(curent => this.currentT = curent);
      this.router.navigateByUrl('/userdata');
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
    localStorage.removeItem('phone');
    localStorage.removeItem('created');
    localStorage.removeItem('modified');
    localStorage.setItem('logged', 'false');
    this.router.navigateByUrl('/home');
    this.navservice.changeMessage(true);
    window.location.reload();
  }

  onEditUser(): void{
    this.editUser = true;
  }

  onCancelUser(): void{
    this.UserM.email = localStorage.getItem('email');
    this.UserM.usertype = localStorage.getItem('ut');
    this.UserM.firstname = localStorage.getItem('firstname');
    this.UserM.lastname = localStorage.getItem('lastname');
    this.UserM.age = localStorage.getItem('age');
    this.UserM.gender = localStorage.getItem('gender');
    this.UserM.phone = localStorage.getItem('phone');
    this.UserM.created = localStorage.getItem('created');
    this.UserM.modified = localStorage.getItem('modified');
    this.editUser = false;
    window.location.reload();
  }

  onSaveChanges(): void{
    if (
      this.updateForm.value.password === "" ||
      this.updateForm.value.firstname === "" ||
      this.updateForm.value.lastname === "" ||
      this.updateForm.value.age === "" ||
      this.updateForm.value.gender === "" ||
      this.updateForm.value.phone === ""
    ) {
      this.errorSaving = true;
    }else{
      this.auth.update(this.updateForm.value).subscribe(response => {
        this.editUser = false;
        let authResponse = JSON.parse(response.text());
        if (String(authResponse).indexOf("{'updated': '1'}") > -1) {
          this.errorSaving = false;
          this.editUser = false;
        }else{
          this.errorSaving = true;
          this.errorMessage = "No pudimos guardar tus cambios. ";
        }
      });
    }
  }


}
