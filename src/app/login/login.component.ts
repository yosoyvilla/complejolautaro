import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ApiService]
})
export class LoginComponent implements OnInit {

  email: string = "";

  password: string = "";

  constructor(private auth: ApiService) { }

  ngOnInit() {
  }

  onLogin(): void {
    this.auth.login(1).subscribe(response => console.log(response));
  }

}
