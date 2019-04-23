import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor() { }

  // public getListUsers(): User[] {
  // }

   // public deleteUser(name: string) {
  // }

  // public modifyUser(name: string) {
  // }

  public addUser(name: string): UserFormat {
    if (localStorage.getItem('extremeIdUser') == null) {
      localStorage.setItem('extremeIdUser', '0');
      localStorage.setItem('listOfUsers', '');
    }
    let listUsers: UserFormat[];
    if (localStorage.getItem('listOfUsers') == '') { listUsers = []; } else { listUsers = JSON.parse(localStorage.getItem('listOfUsers')); }
    const user: UserFormat = {
      name,
      id: (Number.parseInt(localStorage.getItem('extremeIdUser')) + 1).toString()
    };
    listUsers.push(user);
    localStorage.setItem('listOfUsers', JSON.stringify(listUsers));
    localStorage.setItem('extremeIdUser', (Number.parseInt(localStorage.getItem('extremeIdUser')) + 1).toString());
    return user;
  }

  public getUserById(id: string): UserFormat {
    if ((localStorage.getItem('listOfUsers') == null) || (localStorage.getItem('listOfUsers') == '')) { return null; }
    const listUsers: UserFormat[] = JSON.parse(localStorage.getItem('listOfUsers'));
    for (let i = 0; i < listUsers.length; i++) {
      if (listUsers[i].id == id) { return listUsers[i]; }
    }
    return null;
  }

  public getUserByName(name: string): UserFormat {
    if ((localStorage.getItem('listOfUsers') == null) || (localStorage.getItem('listOfUsers') == '')) { return null; }
    const listUsers: UserFormat[] = JSON.parse(localStorage.getItem('listOfUsers'));
    for (let i = 0; i < listUsers.length; i++) {
      if (listUsers[i].name == name) { return listUsers[i]; }
    }
    return null;
  }

  public selectUser(id: string) {
    localStorage.setItem('CurrentUserId', id);
  }

  public getIdCurrentUser(): string {
    return localStorage.getItem('CurrentUserId');
  }
}

export interface UserFormat {
  name: string;
  id: string;
}
