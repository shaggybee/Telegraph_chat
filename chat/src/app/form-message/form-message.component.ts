import { Component, OnDestroy } from '@angular/core';
import { MessagesService, MessageFormat } from '../messages.service';
import { UsersService, UserFormat} from '../users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.css']
})
export class FormMessageComponent implements OnDestroy {
  private idSelectMessage: string;
  private textRedactMessage: string;
  private listMessages: MessageFormat[];
  private subscribeToMessages: Subscription;
  private currentUser: UserFormat;
  private subscribeToUser: Subscription;

  constructor(private message: MessagesService, private user: UsersService) {
    this.subscribeToMessages = this.message.messages().subscribe(listMessage => { this.listMessages = listMessage; });
    this.subscribeToUser = this.user.current().subscribe(current => this.currentUser = current);
   }

   ngOnDestroy() {
    this.subscribeToUser.unsubscribe();
    this.subscribeToMessages.unsubscribe();
  }

  private actionForMessageVisible(idUser: string): boolean {
    if (idUser == this.currentUser.id) { return true; } else { return false; }
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

  public showNameUser(idUser: string): string {
    return this.user.getUserById(idUser).name;
  }

  public getListMessage(): MessageFormat[] {
    return this.message.getListMessage();
  }
}