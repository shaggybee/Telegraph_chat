import { Injectable } from '@angular/core';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {
  private user: UsersService;

  constructor(user: UsersService ) {
    this.user = user;
  }

  public addMessage(textMessage: string): MessageFormat {
    if (localStorage.getItem('extremeIdMessage') == null) {
      localStorage.setItem('extremeIdMessage', '0');
      localStorage.setItem('listOfMessage', '');
    }
    let listMessage: MessageFormat[];
    if (localStorage.getItem('listOfMessage') == '') { listMessage = []; }
    else { listMessage = JSON.parse(localStorage.getItem('listOfMessage')); }
    const message: MessageFormat = {
      idMessage: (Number.parseInt(localStorage.getItem('extremeIdMessage')) + 1).toString(),
      idUser: localStorage.getItem('CurrentUserId'),
      textMessage,
      time: new Date().toLocaleString(),
    };
    listMessage.push(message);
    localStorage.setItem('listOfMessage', JSON.stringify(listMessage));
    localStorage.setItem('extremeIdMessage', (Number.parseInt(localStorage.getItem('extremeIdMessage')) + 1).toString());
    return message;
  }

  public getMessage() {

  }

  public getListMessage(): MessageFormat[] {
    return JSON.parse(localStorage.getItem('listOfMessage'));
  }

  public deleteMessage() {

  }

  public updateMessage() {

  }
}

export interface MessageFormat {
  idMessage: string;
  idUser: string;
  textMessage: string;
  time: string;
}
