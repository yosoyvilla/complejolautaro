import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../classes/user';

@Injectable()
export class UserService {
  UserM: User = new User;
  private userModel = new BehaviorSubject<User>(this.UserM);
  currentUser = this.userModel.asObservable();
  constructor() { }
  changeUser(user: User) {
    this.userModel.next(user)
  }
}