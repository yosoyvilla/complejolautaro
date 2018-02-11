import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/auth.service";
import { navigationService } from "../services/data.service";
import { ActivatedRoute, RouterModule, Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { UserService } from "../services/user.service";
import { User } from "../classes/user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [ApiService, UserService, navigationService]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(),
    pwd: new FormControl()
  });

  registerForm = new FormGroup({
    email: new FormControl(),
    pwd: new FormControl(),
    firstname: new FormControl(),
    lastname: new FormControl(),
    age: new FormControl(),
    gender: new FormControl(),
    phone: new FormControl()
  });

  UserM: User = new User();

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

  phone: string = "";

  showalert: boolean = false;

  constructor(
    private auth: ApiService,
    private navservice: navigationService,
    private router: Router,
    private users: UserService
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.navservice.currentTemplate.subscribe(
      curent => (this.currentT = curent)
    );
  }

  onLogin(): void {
    if (this.loginForm.value.email === "" || this.loginForm.value.pwd === "") {
      this.usralert = "Por favor no deje los campos en blanco.";
      this.showalert = true;
    } else {
      if (this.EMAIL_REGEXP.test(this.loginForm.value.email)) {
        this.auth.login(this.loginForm.value).subscribe(response => {
          let authResponse = JSON.parse(response.text());
          if (authResponse.exists === false) {
            this.showalert = true;
          } else {
            localStorage.setItem("email", authResponse.email);
            localStorage.setItem("ut", authResponse.usertype);
            localStorage.setItem("firstname", authResponse.firstname);
            localStorage.setItem("lastname", authResponse.lastname);
            localStorage.setItem("age", authResponse.age);
            localStorage.setItem("gender", authResponse.gender);
            localStorage.setItem("created", authResponse.created);
            localStorage.setItem("modified", authResponse.modified);
            localStorage.setItem("phone", authResponse.phone);
            localStorage.setItem("logged", "true");
            this.navservice.changeMessage(false);
            window.location.reload();
          }
        });
      } else {
        this.usralert = "Por favor ingrese un email valido";
        this.showalert = true;
      }
    }
  }

  onRegister(): void {
    if (
      this.registerForm.value.email === "" ||
      this.registerForm.value.password === "" ||
      this.registerForm.value.firstname === "" ||
      this.registerForm.value.lastname === "" ||
      this.registerForm.value.age === "" ||
      this.registerForm.value.gender === "" ||
      this.registerForm.value.phone === ""
    ) {
      this.usralert = "Por favor no deje los campos en blanco.";
      this.showalert = true;
    } else {
      if (this.EMAIL_REGEXP.test(this.registerForm.value.email)) {
        this.auth.register(this.registerForm.value).subscribe(response => {
          let authResponse = JSON.parse(response.text());
          if (String(authResponse).indexOf("{'created': '1'}") > -1) {
            this.navservice.changeMessage(false);
            localStorage.setItem("email", this.registerForm.value.email);
            localStorage.setItem("ut", "2");
            localStorage.setItem("firstname", this.registerForm.value.firstname);
            localStorage.setItem("lastname", this.registerForm.value.lastname);
            localStorage.setItem("age", this.registerForm.value.age);
            localStorage.setItem("gender", this.registerForm.value.gender);
            localStorage.setItem("phone", this.registerForm.value.phone);
            localStorage.setItem("logged", "true");
            window.location.reload();
          } else {
            this.usralert = "No se pudo crear el usuario.";
            this.showalert = true;
          }
        });
      } else {
        this.usralert = "Por favor ingrese un email valido";
        this.showalert = true;
      }
    }
  }

  switchToCreate(): void {
    this.stcreate = true;
    this.showalert = false;
    window.scrollTo(0, 0);
  }

  switchToLogin(): void {
    this.usralert = "El usuario y/o contraseña es incorrecto";
    this.stcreate = false;
    this.showalert = false;
    this.registerForm.reset();
    window.scrollTo(0, 0);
  }

  dataChanged(): void {
    this.usralert = "El usuario y/o contraseña es incorrecto";
    this.showalert = false;
  }
}
