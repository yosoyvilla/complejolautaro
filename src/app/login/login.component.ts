import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/auth.service';
import { navigationService } from '../services/data.service';
import {ActivatedRoute, RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ApiService]
})
export class LoginComponent implements OnInit {

  currentT: boolean;

  email: string = "";

  password: string = "";

  showalert: boolean = false;

  constructor(private auth: ApiService, private navservice: navigationService, private router: Router) { }

  ngOnInit() {
    this.navservice.currentTemplate.subscribe(curent => this.currentT = curent)
  }

  onLogin(): void {
    this.auth.login(this.email, this.password).subscribe(response => {
      let authResponse = JSON.parse(response.text());
      if(authResponse.exists === false){
        this.showalert = true;
      }else{
        localStorage.setItem('logged', 'true');
        this.router.navigateByUrl('/admindb');
        this.navservice.changeMessage(false);
      }
    });
  }

  dataChanged(): void{
    this.showalert = false;
  }

}
