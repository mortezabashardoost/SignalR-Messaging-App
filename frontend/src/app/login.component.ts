import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent {

  form;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.form = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    var credentials = { 'email': this.form.value['email'], 'password': this.form.value['password']}
    this.auth.login(credentials);
  }


}
