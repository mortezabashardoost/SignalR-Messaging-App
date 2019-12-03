import { WebService } from './web.service';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'new-message',
  templateUrl: './new-message.component.html'
})

export class NewMessageComponent {

  constructor(private webService: WebService, private auth: AuthService) { }

  message = {
    owner: this.auth.name,
    text: ""
  };

 
  post() {
    if (this.message.text > "" && this.auth.isAuthenticated) {
      this.webService.postMessage(this.message).subscribe(response => {
        if (this.auth.connectionStarted) {
          this.auth.hubConnection.invoke("Echo", this.message.text); 
        }
      }, error => {
        this.webService.handleError("Unable to post message");
      });;
      
      this.message.text = "";
    }
  }
}
