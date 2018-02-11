import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Injectable()
export class ApiService {

   constructor(private _http: Http) {}

   login(user): Observable<any> {
       //return this._http.get("http://localhost:8888/clws/user/read_one.php?email="+user.email+"&password="+user.pwd+"");
      return this._http.get("http://bigbossduck.com/api/user/read_one.php?email="+user.email+"&password="+user.pwd+"");
    }

    // Send user data to remote server to create it.
    register(user): Observable<any>{
 
  let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  let options: RequestOptions = new RequestOptions({ headers: headers });

  // return this._http.post(
  //     "http://localhost:8888/clws/user/create.php",
  //     user,
  //     options
  // );
    return this._http.post(
      "http://bigbossduck.com/api/user/create.php",
      user,
      options
  );
}

    // Send user data to remote server to create it.
    update(user): Observable<any>{
 
      let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
      let options: RequestOptions = new RequestOptions({ headers: headers });
    
      // return this._http.post(
      //     "http://localhost:8888/clws/user/update.php",
      //     user,
      //     options
      // );
        return this._http.post(
          "http://bigbossduck.com/api/user/update.php",
          user,
          options
      );
    }
}