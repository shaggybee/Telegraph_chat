import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {
  public listMessages: BehaviorSubject<MessageFormat[]>;

  constructor() {
    this.listMessages = new BehaviorSubject<MessageFormat[]>(this.getListMessage());
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
    this.listMessages.next(this.getListMessage());
    return message;
  }

  public getListMessage(): MessageFormat[] {
    return JSON.parse(localStorage.getItem('listOfMessage'));
  }

  public messages(): Observable<MessageFormat[]> {
    return this.listMessages.asObservable();
  }

  public deleteMessage(idMessage: string): MessageFormat[] {
    const listMessage: MessageFormat[] = JSON.parse(localStorage.getItem('listOfMessage'));
    const filteredListMessage = listMessage.filter((message) => message.idMessage != idMessage);
    localStorage.setItem('listOfMessage', JSON.stringify(filteredListMessage));
    this.listMessages.next(this.getListMessage());
    return filteredListMessage;
  }

  public editMessage(idMessage: string, text: string) {
    const listMessage: MessageFormat[] = JSON.parse(localStorage.getItem('listOfMessage'));
    listMessage.find((message) => message.idMessage == idMessage).textMessage = text;
    localStorage.setItem('listOfMessage', JSON.stringify(listMessage));
    this.listMessages.next(this.getListMessage());
    return listMessage;
  }
}

export interface MessageFormat {
  idMessage: string;
  idUser: string;
  textMessage: string;
  time: string;
}