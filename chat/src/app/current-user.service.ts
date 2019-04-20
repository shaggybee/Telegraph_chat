import { Injectable } from '@angular/core';

import { User } from 'src/app/user'

@Injectable({
  providedIn: 'root'
})

export class CurrentUserService {
  loginCompleted: boolean;
  user: User;
  a: string = "0";
  b: string = "0";
  c: string = "0";

  constructor() {
    this.user = new User();

    if (localStorage.getItem("loginCompleted") == "true") {
      this.user.id = Number.parseInt(localStorage.getItem("userId"));
      this.user.name = localStorage.getItem("userName");
      this.loginCompleted = true;
    } else {
      this.loginCompleted = false;
    }
   }

  private updateUser(name: string, id: number){
    this.user.name = name;
    this.user.id = id;
  } 

  private updateLocalStorage(command : string){
    if (command == "initLocalStorage"){
      localStorage.setItem("userName", this.user.name);
      localStorage.setItem("userId", "1");
      localStorage.setItem("extremeId", "1");
      localStorage.setItem("listOfUsers", JSON.stringify([this.user]));
    }
    else if (command == "addNewUser"){
      let listUsers: User[] = JSON.parse(localStorage.getItem("listOfUsers"));
      listUsers.push(this.user);
      localStorage.setItem("listOfUsers", JSON.stringify(listUsers));
      localStorage.setItem("userName", this.user.name);
      localStorage.setItem("userId", this.user.id.toString());
      localStorage.setItem("extremeId", this.user.id.toString());
    }
    else if (command == "selectUser"){
      localStorage.setItem("userName", this.user.name);
      localStorage.setItem("userId", this.user.id.toString());
    }
    else if (command == "logOut"){
      localStorage.setItem("loginCompleted", "false");
      localStorage.setItem("userName", "");
      localStorage.setItem("userId", ""); 
    }
  }

  public logOut(){
    this.loginCompleted = false;
    this.updateUser("", 0);
    this.updateLocalStorage("logOut");
  }

  public authorization(userName: string){
      //if first input, no users
      if ((userName.length == 0) || (userName.charAt(0) == " ")) return;
      if (localStorage.getItem("extremeId") == null){
        this.updateUser(userName, 1);
        this.updateLocalStorage("initLocalStorage");
      } 
      else {
        let listUsers: User[] = JSON.parse(localStorage.getItem("listOfUsers"));
        let userFind : boolean = false;
        for (let i = 0; i < listUsers.length; i++){
          if (listUsers[i].name == userName) {
            this.updateUser(userName, listUsers[i].id);
            this.updateLocalStorage("selectUser");
            userFind = true;
          }
        }
        if (!userFind){
          let id: number = Number.parseInt(localStorage.getItem("extremeId")) + 1;
          this.updateUser(userName, id);
          this.updateLocalStorage("addNewUser");
        }
      }
      this.loginCompleted = true;
      localStorage.setItem("loginCompleted", "true");  
    }
    
  };
