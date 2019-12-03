import { Component } from '@angular/core';
import { WebService } from './web.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent {

  profileData = {
    firstname: "",
    lastname: ""
  };

  constructor(private webService: WebService, private auth: AuthService) {

  }

  ngOnInit() {
    if (!this.auth.isAuthenticated) {
      this.auth.logout();
    }
    this.webService.getUser().subscribe(res => {
      this.profileData.firstname = res.json().firstName;
      this.profileData.lastname = res.json().lastName;
    });

  }

  saveProfile(profileData) {
    this.webService.saveUser(profileData).subscribe(res => {
      this.webService.alert("saved..");
    });
  }

}
