import { Component, OnDestroy } from '@angular/core';
import { MessagesService, MessageFormat } from '../messages.service';
import { UsersService, UserFormat} from '../users.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.css']
})
export class FormMessageComponent implements OnDestroy {
  private destroySubscriptions = new Subject<boolean>();
  private idSelectMessage: string;
  private textRedactMessage: string;
  private listMessages: MessageFormat[];
  private currentUser: UserFormat;

  constructor(private message: MessagesService, private user: UsersService) {
    this.message.messages().pipe(takeUntil(this.destroySubscriptions)).subscribe(listMessage => this.listMessages = listMessage);
    this.user.current().pipe(takeUntil(this.destroySubscriptions)).subscribe(current => this.currentUser = current);
   }

   ngOnDestroy() {
     this.destroySubscriptions.next(true);
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