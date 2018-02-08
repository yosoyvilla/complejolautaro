import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

   constructor(private _http: Http) {}

   login(id): Observable<any> {
      return this._http.get("http://bigbossduck.com/api/user/read_one.php?email=admin@admin.com&password=complejo2018");
    }
}