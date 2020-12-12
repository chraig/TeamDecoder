import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '@src/app/services/login/login.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;

    constructor(private router: Router, private loginService: LoginService) { }

    public login(email: string, password: string) {
        this.router.navigate(['sidenav'], { replaceUrl: true });
        this.setLoggedIn(true);
    }

    private setLoggedIn(value: boolean): void {
        this.loginService.setLoggedIn(value);
    }

    ngOnInit() { }
}
