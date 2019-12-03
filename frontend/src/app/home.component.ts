import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { WebService } from './web.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private webService:WebService, private auth: AuthService) {  }

  ngOnInit() {
    if (!this.auth.isAuthenticated) {
      this.auth.logout();
    } 
  }
}
