import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from './core/auth.service'

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private router: Router,
    private auth: AuthService
  ){
  }

  ngOnInit(){
    if(this.auth.isLoggedIn){
      this.router.navigate(['/dashboard'])
    }else{
      this.router.navigate(['/login'])
    }
  }
  
}