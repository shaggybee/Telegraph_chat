import { Component, OnInit } from '@angular/core';
import { AuthorisationService } from '../authorisation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  private authorisation: AuthorisationService;
  private router: Router;
  inputName: string;

  constructor(authorisation: AuthorisationService, router: Router){
    this.router = router;
    this.authorisation = authorisation;
  };

  ngOnInit() {
  }

  clickLogIn() {
    this.authorisation.logIn(this.inputName);
    this.router.navigate(['chat']);
  }

}
