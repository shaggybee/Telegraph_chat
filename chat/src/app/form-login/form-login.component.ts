import { Component, OnInit } from '@angular/core';
import { AuthorisationService } from '../authorisation.service';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  inputName = '';

  constructor(private authorisation: AuthorisationService, private router: Router, private user: UsersService) {
  }

  ngOnInit() {
  }

onLogIn() {
    if (!this.inputName) { return; }
    const name = this.inputName[0].toUpperCase() + this.inputName.slice(1).toLowerCase();
    this.authorisation.logIn(name);
    this.user.currentUser.next(this.user.getUserById(this.user.getIdCurrentUser()));
    this.router.navigate(['chat']);
  }

onEnterPress() {
  this.onLogIn();
}

}
