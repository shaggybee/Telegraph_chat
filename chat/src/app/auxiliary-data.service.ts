import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuxiliaryDataService {

  formLoginVisible: boolean = false;
  formChatVisible: boolean = false;

  constructor() { }
}
