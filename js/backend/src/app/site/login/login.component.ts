import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import { AuthService } from '../../core/auth.service' 

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
})
export class LoginComponent implements OnInit{
    validateForm: FormGroup;
    username: string;
    password: string;

    constructor(
        private auth: AuthService,
        private router: Router,
        private fb: FormBuilder
    ){}

    ngOnInit(){
        this.validateForm = this.fb.group({
            userName: [ null, [ Validators.required ] ],
            password: [ null, [ Validators.required ] ],
            remember: [ true ],
          });
    }

    _submitForm() {
        this.auth.login().subscribe(() => {
            if(this.auth.isLoggedIn) {
                let redirect = this.auth.redirectUrl ?
                    this.auth.redirectUrl : '/dashboard';
                
                this.router.navigate([redirect])
            }
        });
    }

}