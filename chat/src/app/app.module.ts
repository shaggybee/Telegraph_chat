import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormChatComponent } from './form-chat/form-chat.component';

import { AuthorisationService } from './authorisation.service';
import { UsersService } from './users.service';
import { MessagesService } from './messages.service';

const appRoutes: Routes = [
  {path: 'login', component: FormLoginComponent},
  {path: 'chat', component: FormChatComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    FormChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthorisationService, UsersService, MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
