import { AuthService } from './auth.service';
import { WebService } from './web.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'messages',
    templateUrl: './messages.component.html'
})

export class MessagesComponent {

  constructor(private auth: AuthService, private webService: WebService, private route: ActivatedRoute) { }

  ngOnInit() {

    var name = this.route.snapshot.params.name;
    this.webService.getMessages(name);

    this.auth.hubConnection.on("Send",
      (msg) => {
        this.webService.getMessages(this.route.snapshot.params.name);
      });

  }

}
