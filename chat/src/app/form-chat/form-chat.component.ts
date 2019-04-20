import { Component, OnInit } from '@angular/core';
import { AuxiliaryDataService } from '../auxiliary-data.service';
import { CurrentUserService } from '../current-user.service';

@Component({
  selector: 'app-form-chat',
  templateUrl: './form-chat.component.html',
  styleUrls: ['./form-chat.component.css']
})
export class FormChatComponent implements OnInit {
  a: String;

  constructor(private auxiliaryData: AuxiliaryDataService, private currentUser: CurrentUserService){
    this.a = localStorage.getItem("listOfUsers");
  };

  ngOnInit() {
  }

  clickLogOut(){
    this.currentUser.logOut();
    this.auxiliaryData.formChatVisible = false;
    this.auxiliaryData.formLoginVisible = true;
  }

}
