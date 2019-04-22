import { Injectable } from '@angular/core';

import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})

export class AuthorisationService {

  private user: UsersService;

  constructor(user: UsersService ) {
    this.user = user;
  }

  public logOut() {
    localStorage.removeItem('CurrentUserId');
  }

  public logIn(name: string) {
    let user = this.user.getUserByName(name);
    if (user == null) { user = this.user.addUser(name); }
    this.user.selectUser(user.id);
  }

  public isAutorised(): boolean {
    if (localStorage.getItem('CurrentUserId') == null) { return false; } else { return true; }
  }
}
