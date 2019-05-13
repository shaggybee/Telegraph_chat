import { Component, OnInit } from '@angular/core';
import { MessagesService, MessageFormat } from '../messages.service';
import { UsersService} from '../users.service';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.css']
})
export class FormMessageComponent implements OnInit {
  private idSelectMessage: string;
  listMessages: MessageFormat[];
  private textRedactMessage: string;

  constructor(private message: MessagesService, private user: UsersService) {
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

  public onDeleteMessage(idMessage: string) {
    this.message.deleteMessage(idMessage);
  }

  public onOpenFormRedactMessage(idMessage: string, textMessage: string) {
    this.textRedactMessage = textMessage;
    this.idSelectMessage = idMessage;
  }

  public onRedactMessage(idMessage: string) {
    if (this.textRedactMessage == '') { return; }
    this.message.editMessage(idMessage, this.textRedactMessage);
    this.idSelectMessage = '';
  }

  public onCloseFormRedactMessage() {
    this.idSelectMessage = '';
  }

  public showNameCurrentUser(idUser: string): string {
    return this.user.getUserById(idUser).name;
  }

  public getListMessage(): MessageFormat[] {
    return this.message.getListMessage();
  }
}