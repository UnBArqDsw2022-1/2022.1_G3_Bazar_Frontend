import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
    ) {}

  ngOnInit(): void {
  }

  logout(){}

  routerLogin(){
    if( this.router.url.match (/login/)){
      console.log("teste");
      return true;
    }
    return false;
  }
}
