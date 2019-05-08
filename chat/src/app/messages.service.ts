import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {
  public subjectGetMessage = new Subject<any>();

  constructor() {
  }

  public addMessage(textMessage: string): MessageFormat {
    if (localStorage.getItem('extremeIdMessage') == null) {
      localStorage.setItem('extremeIdMessage', '0');
      localStorage.setItem('listOfMessage', '[]');
    }
    const listMessage: MessageFormat[] = JSON.parse(localStorage.getItem('listOfMessage'));
    const message: MessageFormat = {
      idMessage: (Number.parseInt(localStorage.getItem('extremeIdMessage')) + 1).toString(),
      idUser: localStorage.getItem('CurrentUserId'),
      textMessage,
      time: new Date().toLocaleTimeString('ru', {hour: 'numeric', minute: 'numeric'})
    };
    listMessage.push(message);
    localStorage.setItem('listOfMessage', JSON.stringify(listMessage));
    localStorage.setItem('extremeIdMessage', (Number.parseInt(localStorage.getItem('extremeIdMessage')) + 1).toString());
    this.subjectGetMessage.next(this.getListMessage());
    return message;
  }

  public getMessage() {
  }

  public getListMessage(): MessageFormat[] {
    return JSON.parse(localStorage.getItem('listOfMessage'));
  }

  public deleteMessage(idMessage: string): MessageFormat[] {
    const listMessage: MessageFormat[] = JSON.parse(localStorage.getItem('listOfMessage'));
    const indexDeleteMessage = listMessage.findIndex((message) => message.idMessage == idMessage);
    listMessage.splice(indexDeleteMessage, 1);
    localStorage.setItem('listOfMessage', JSON.stringify(listMessage));
    this.subjectGetMessage.next(this.getListMessage());
    return listMessage;
  }

  public redactMessage(idMessage: string, text: string) {
    const listMessage: MessageFormat[] = JSON.parse(localStorage.getItem('listOfMessage'));
    const indexRedactMessage = listMessage.findIndex((message) => message.idMessage == idMessage);
    listMessage[indexRedactMessage].textMessage = text;
    localStorage.setItem('listOfMessage', JSON.stringify(listMessage));
    this.subjectGetMessage.next(this.getListMessage());
    return listMessage;
  }
}

export interface MessageFormat {
  idMessage: string;
  idUser: string;
  textMessage: string;
  time: string;
}
