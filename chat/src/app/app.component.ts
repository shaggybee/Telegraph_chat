import { Component } from '@angular/core';
import { AuthorisationService } from './authorisation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private router: Router;
  private authorisation: AuthorisationService;

  constructor(authorisation: AuthorisationService, router: Router) {
    this.router = router;
    this.authorisation = authorisation;
    if (this.authorisation.isAutorised()) {this.router.navigate(['chat']); } else {this.router.navigate(['login']); }
  }
}