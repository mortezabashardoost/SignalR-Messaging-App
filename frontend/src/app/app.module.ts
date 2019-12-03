import { NewMessageComponent } from './new-message.component';
import { HttpModule } from '@angular/http';
import { WebService } from './web.service';
import { AuthService } from './auth.service';
import { MessagesComponent } from './messages.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from "@angular/material";
import { NavComponent } from './nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { ProfileComponent } from "./profile.component";

var routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "messages/:name",
    component: MessagesComponent
  }];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    MessagesComponent,
    NewMessageComponent,
    RegisterComponent,
    LoginComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [
    WebService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
