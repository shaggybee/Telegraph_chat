import { Component, OnInit } from '@angular/core';
import { AuthorisationService } from '../authorisation.service';
import { Router } from '@angular/router';
import { MessagesService, MessageFormat } from '../messages.service';

@Component({
  selector: 'app-form-chat',
  templateUrl: './form-chat.component.html',
  styleUrls: ['./form-chat.component.css']
})

export class FormChatComponent implements OnInit {
  private authorisation: AuthorisationService;
  private router: Router;
  private message: MessagesService;
  textMessage: string;

  constructor(authorisation: AuthorisationService, router: Router, message: MessagesService) {
    this.message = message;
    this.router = router;
    this.authorisation = authorisation;
  }

  ngOnInit() {
  }

  clickLogOut() {
    this.authorisation.logOut();
    this.router.navigate(['login']);
  }

  clickMessageSend() {
    this.message.addMessage(this.textMessage);
  }

}
