import { Component, OnInit } from '@angular/core';
import { AuxiliaryDataService } from '../auxiliary-data.service';
import { CurrentUserService } from '../current-user.service';
import { userInfo } from 'os';
import { currentId } from 'async_hooks';
import { User } from '../user';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  
  inputName: string;
  l: String;

  constructor(private auxiliaryData: AuxiliaryDataService, private currentUser: CurrentUserService){
  };

  ngOnInit() {
  }

  clickLogIn(){
    this.currentUser.authorization(this.inputName);
    this.auxiliaryData.formChatVisible = true;
    this.auxiliaryData.formLoginVisible = false;
  }

  clickLogInClear(){
    localStorage.clear();
    this.currentUser.loginCompleted = false;
    this.auxiliaryData.formChatVisible = false;
    this.auxiliaryData.formLoginVisible = true;
    localStorage.setItem("loginCompleted", "false");
  }

}
