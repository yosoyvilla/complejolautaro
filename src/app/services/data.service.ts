import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class navigationService {
  private navTabs = new BehaviorSubject<string>("1");
  currentTab = this.navTabs.asObservable();
  constructor() { }
  changeMessage(tab: string) {
    this.navTabs.next(tab)
  }
}