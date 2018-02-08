import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

   constructor(private _http: Http) {}

   login(email: string, password: string): Observable<any> {
      // return this._http.get("http://localhost:8888/clws/user/read_one.php?email="+email+"&password="+password+"");
      return this._http.get("http://bigbossduck.com/api/user/read_one.php?email="+email+"&password="+password+"");
    }
}