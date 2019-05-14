import { Component, OnDestroy } from '@angular/core';
import { AuthorisationService } from '../authorisation.service';
import { Router } from '@angular/router';
import { MessagesService } from '../messages.service';
import { UsersService, UserFormat} from '../users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-chat',
  templateUrl: './form-chat.component.html',
  styleUrls: ['./form-chat.component.css']
})

export class FormChatComponent implements OnDestroy {
  private textMessage = '';
  private currentUser: UserFormat;
  private subscribeToUser: Subscription;

  constructor(private authorisation: AuthorisationService, private router: Router, private message: MessagesService, private user: UsersService) {
    this.subscribeToUser = this.user.current().subscribe(current => this.currentUser = current);
  }

  ngOnDestroy() {
    this.subscribeToUser.unsubscribe();
  }

  onLogOut() {
    this.authorisation.logOut();
    this.router.navigate(['login']);
  }

  onMessageSend() {
    if (!this.textMessage) { return; }
    this.message.addMessage(this.textMessage);
    this.textMessage = '';
    setTimeout(function() {
      document.getElementsByClassName('chat-form-messages')[0].scrollTop = document.getElementsByClassName('chat-form-messages')[0].scrollHeight;
    }, 10);
  }

}
