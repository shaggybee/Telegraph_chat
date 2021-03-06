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
  textMessage = '';

  constructor(private authorisation: AuthorisationService, private router: Router, private message: MessagesService, private user: UsersService) {
  }

  ngOnInit() {
  }

  onLogOut() {
    this.authorisation.logOut();
    this.router.navigate(['login']);
  }

  onMessageSend() {
    if (this.textMessage == '') { return; }
    this.message.addMessage(this.textMessage);
    this.textMessage = '';
    setTimeout(function() {
      document.getElementsByClassName('chat-form-messages')[0].scrollTop = document.getElementsByClassName('chat-form-messages')[0].scrollHeight;
    }, 10);
  }

}
