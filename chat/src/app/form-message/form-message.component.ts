import { Component, OnInit, OnChanges } from '@angular/core';
import { MessagesService, MessageFormat } from '../messages.service';
import { UsersService} from '../users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.css']
})
export class FormMessageComponent implements OnInit {
  private message: MessagesService;
  private user: UsersService;
  private idSelectMessage: string;
  private listMessages: MessageFormat[];
  private textRedactMessage: string;

  constructor(message: MessagesService, user: UsersService) {
    this.message = message;
    this.user = user;
    this.listMessages = this.message.getListMessage();
    this.message.subjectGetMessage.subscribe(listMessage => { this.listMessages = listMessage; });
   }

  ngOnInit() {
  }


  private actionForMessageVisible(idUser: string): boolean {
    if (idUser == this.user.getIdCurrentUser()) { return true; } else { return false; }
  }

  private formRedactMessageVisible(idMessage: string): boolean {
    if (idMessage == this.idSelectMessage) { return true; } else { return false; }
  }

  public clickDeleteMessage(idMessage: string) {
    this.message.deleteMessage(idMessage);
  }

  public clickOpenFormRedactMessage(idMessage: string, textMessage: string) {
    this.textRedactMessage = textMessage;
    this.idSelectMessage = idMessage;
  }

  public clickRedactMessage(idMessage: string) {
    this.message.redactMessage(idMessage, this.textRedactMessage);
    this.idSelectMessage = '';
  }

  public clickCloseFormRedactMessage() {
    this.idSelectMessage = '';
  }

  public showNameCurrentUser(idUser: string): string {
    return this.user.getUserById(idUser).name;
  }

  public getListMessage(): MessageFormat[] {
    return this.message.getListMessage();
  }
}