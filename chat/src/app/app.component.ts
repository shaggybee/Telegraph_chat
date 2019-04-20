import { Component } from '@angular/core';
import { AuxiliaryDataService } from './auxiliary-data.service';
import { CurrentUserService } from './current-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private auxiliaryData: AuxiliaryDataService, private currentUser: CurrentUserService){
    if (this.currentUser.loginCompleted) this.auxiliaryData.formChatVisible = true;
    else this.auxiliaryData.formLoginVisible = true;
  }
}