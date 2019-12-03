import { Http } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './auth.service';

@Injectable()
export class WebService {

  BASE_URL = 'http://localhost:5000/api';
  

  public messages;

  constructor(private http: Http, private sb: MatSnackBar, private auth:AuthService) {
    this.getMessages(null);
  }

  getMessages(name) {
    name = (name) ? "/" + name : "";
    this.http.get(this.BASE_URL + '/messages' + name).subscribe(response => {
      this.messages = response.json();
    }, error => {
      this.handleError("Unable to get messages");
    });
  }

  postMessage(message) {
    return this.http.post(this.BASE_URL + '/messages', message);
  }

  getUser() {
    return this.http.get(this.BASE_URL + "/users/me", this.auth.tokenHeader);
  }

  saveUser(profileData) {
    return this.http.post(this.BASE_URL + "/users/me",profileData, this.auth.tokenHeader);
  }

  public handleError(error) {
    this.sb.open(error, "Close", { duration: 4000, });
    console.error(error);
  }

  public alert(message) {
    this.sb.open(message, "Close", { duration: 4000, });
  }

}
