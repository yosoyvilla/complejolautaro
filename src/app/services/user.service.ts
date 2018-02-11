import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../classes/user';

@Injectable()
export class UserService {
  private userModel = new BehaviorSubject<User>(new User);
  currentUser = this.userModel.asObservable();
  constructor() { }
  changeUser(user: User) {
    console.log(user.email);
    this.userModel.next(user);
  }
}