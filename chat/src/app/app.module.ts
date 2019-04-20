import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormChatComponent } from './form-chat/form-chat.component';

import { AuxiliaryDataService } from './auxiliary-data.service';
import { CurrentUserService } from './current-user.service';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    FormChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuxiliaryDataService, CurrentUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
