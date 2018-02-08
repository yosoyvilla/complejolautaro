import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class navigationService {
  private templateSwitcher = new BehaviorSubject<boolean>(true);
  currentTemplate = this.templateSwitcher.asObservable();
  constructor() { }
  changeMessage(template: boolean) {
    this.templateSwitcher.next(template)
  }
}