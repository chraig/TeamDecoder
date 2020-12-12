import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class LoginService {

    constructor() { }

    private userLoggedIn = new BehaviorSubject(false);

    getLoggedIn(): Observable<boolean> {
        return this.userLoggedIn.asObservable();
    }

    getLoggedInValue(): boolean {
        return this.userLoggedIn.getValue();
    }

    setLoggedIn(val: boolean) {
        this.userLoggedIn.next(val);
    }
}
