import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/auth.service';
import { navigationService } from '../services/data.service';
import {ActivatedRoute, RouterModule, Router} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ApiService]
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup ({
    email: new FormControl(),
    pwd: new FormControl(),
  });

  registerForm = new FormGroup ({
    email: new FormControl(),
    pwd: new FormControl(),
    firstname: new FormControl(),
    lastname: new FormControl(),
    age: new FormControl(),
    gender: new FormControl(),
  });

  EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

  currentT: boolean;

  usralert: string = "El usuario y/o contraseña es incorrecto";

  stcreate: boolean = false;

  email: string = "";

  password: string = "";

  firstname: string = "";

  lastname: string = "";

  age: string = "";

  gender: string = "Masculino";

  showalert: boolean = false;

  constructor(private auth: ApiService, private navservice: navigationService, private router: Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.navservice.currentTemplate.subscribe(curent => this.currentT = curent)
  }

  onLogin(): void {
    if(this.loginForm.value.email === "" || this.loginForm.value.pwd === ""){
      this.usralert = "Por favor no deje los campos en blanco.";
      this.showalert = true;
    }else{
      if (this.EMAIL_REGEXP.test(this.loginForm.value.email)) {
        this.auth.login(this.loginForm.value).subscribe(response => {
          let authResponse = JSON.parse(response.text());
          if(authResponse.exists === false){
            this.showalert = true;
          }else{
            localStorage.setItem('logged', 'true');
            this.router.navigateByUrl('/admindb');
            this.navservice.changeMessage(false);
          }
        });
    }else{
      this.usralert = "Por favor ingrese un email valido";
      this.showalert = true;
    }
    }
  }

  onRegister(): void {
    if(this.registerForm.value.email === "" || this.registerForm.value.password === "" || this.registerForm.value.firstname === "" || this.registerForm.value.lastname === "" || this.registerForm.value.age === "" || this.registerForm.value.gender === ""){
      this.usralert = "Por favor no deje los campos en blanco.";
      this.showalert = true;
    }else{
      if (this.EMAIL_REGEXP.test(this.registerForm.value.email)) {
                this.auth.register(this.registerForm.value).subscribe(response => {
          let authResponse = JSON.parse(response.text());
          if(authResponse.created === "" || authResponse.created === null || typeof authResponse.created === 'undefined'){
            this.usralert = "No se pudo crear el usuario.";
            this.showalert = true;
          }else{
            localStorage.setItem('logged', 'true');
            this.router.navigateByUrl('/admindb');
            this.navservice.changeMessage(false);
          }
        });
    }else{
      this.usralert = "Por favor ingrese un email valido";
      this.showalert = true;
    }
    }
  }

  switchToCreate(): void{
    this.stcreate = true;
    this.showalert = false;
    window.scrollTo(0, 0);
  }

  switchToLogin(): void{
    this.usralert = "El usuario y/o contraseña es incorrecto";
    this.stcreate = false;
    this.showalert = false;
    window.scrollTo(0, 0);
  }

  dataChanged(): void{
    this.usralert = "El usuario y/o contraseña es incorrecto";
    this.showalert = false;
  }

}
