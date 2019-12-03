import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router'
import { HubConnection, HubConnectionBuilder, HubConnectionState } from "@aspnet/signalr";

@Injectable()
export class AuthService {

  constructor(private http: Http, private router:Router) { }

  BASE_URL = 'http://localhost:5000/auth';
  hubConnection: HubConnection = new HubConnectionBuilder().withUrl("http://localhost:5000/echo").build();
  TOKEN_KEY = 'token';
  NAME_KEY = 'name';

  get name() {
    return localStorage.getItem(this.NAME_KEY);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.NAME_KEY);
  }

  get tokenHeader() {
    var header = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem(this.TOKEN_KEY) });
    return new RequestOptions({ 'headers': header });
  }

  get connectionStarted() {
    return this.hubConnection.state === HubConnectionState.Connected;
  }

  register(user) {
    delete user.confirmPassword;
    this.http.post(this.BASE_URL + '/register', user).subscribe(response => {
      this.authenticateUser(response);
    }, error => {
      console.log(error);
    });
  }

  login(credentials) {
    this.http.post(this.BASE_URL + '/login', credentials).subscribe(response => {
      this.authenticateUser(response);
    }, error => {
      console.log(error);
    });
  }

  logout() {
    localStorage.removeItem(this.NAME_KEY);
    localStorage.removeItem(this.TOKEN_KEY);
    if (this.connectionStarted) {
      this.hubConnection.stop()
        .then(() => {
          console.log("Connection stopped");
        })
        .catch(err => { console.error(err); });
    }
    this.router.navigate(['/login']);
  }

  authenticateUser(response) {
    var authResponse = response.json();
    if (!authResponse.token) {
      return;
    }
    localStorage.setItem(this.TOKEN_KEY, authResponse.token);
    localStorage.setItem(this.NAME_KEY, authResponse.firstName);
    if (!this.connectionStarted) {
      this.hubConnection.start()
        .then(() => {
          console.log("Connection started");
        })
        .catch(err => { console.error(err); });
    }
    this.router.navigate(['/']);
  }

}
