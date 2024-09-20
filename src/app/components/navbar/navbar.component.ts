import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  user = null;
  constructor(public login: LoginService){}

  ngOnInit(): void {
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
  }

  public logout()
  {
    this.login.logout();
    this.isLoggedIn = false;
    this.user  = null;
    window.location.reload();
  }

}
