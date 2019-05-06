import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormChatComponent } from './form-chat/form-chat.component';
import { FormMessageComponent } from './form-message/form-message.component';

import { AuthorisationService } from './authorisation.service';
import { UsersService } from './users.service';
import { MessagesService } from './messages.service';
import { AuthorisathionCheckGuard } from './authorisathion-check.guard';
import { FormLoginGuard } from './form-login.guard';

const appRoutes: Routes = [
  {path: '', redirectTo: 'chat', pathMatch: 'full'},
  {path: 'login', canActivate: [FormLoginGuard], component: FormLoginComponent},
  {path: 'chat', canActivate: [AuthorisathionCheckGuard], component: FormChatComponent},
  {path: '**', redirectTo: 'chat', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    FormChatComponent,
    FormMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [AuthorisationService, UsersService, MessagesService, AuthorisathionCheckGuard, FormLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
