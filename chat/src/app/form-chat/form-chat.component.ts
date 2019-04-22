import { Component, OnInit } from '@angular/core';
import { AuthorisationService } from '../authorisation.service';
import { Router } from '@angular/router';
import { MessagesService } from '../messages.service';
import { UsersService} from '../users.service';

@Component({
  selector: 'app-form-chat',
  templateUrl: './form-chat.component.html',
  styleUrls: ['./form-chat.component.css']
})

export class FormChatComponent implements OnInit {
  private authorisation: AuthorisationService;
  private router: Router;
  private message: MessagesService;
  private user: UsersService;
  textMessage: string;
  logInUser: string;

  constructor(authorisation: AuthorisationService, router: Router, message: MessagesService, user: UsersService) {
    this.message = message;
    this.router = router;
    this.authorisation = authorisation;
    this.user = user;
    this.logInUser = this.user.getUserById(localStorage.getItem('CurrentUserId')).name;
  }

  ngOnInit() {
  }

  clickLogOut() {
    this.authorisation.logOut();
    this.router.navigate(['login']);
  }

  clickMessageSend() {
    this.message.addMessage(this.textMessage);
    this.textMessage = '';
  }
}