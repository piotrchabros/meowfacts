import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import jwt_decode from 'jwt-decode';
import {Subject} from 'rxjs';

export interface UserInfo {
    name: string;
    lastName: string;
    role: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private userInfo = new Subject<UserInfo>();
    public readonly userInfo$ = this.userInfo.asObservable();

    constructor(private router: Router) {} 

    saveToken(token: string) {
        localStorage.setItem('meowfacts', token);
        const userInfo: UserInfo = jwt_decode(token);
        this.userInfo.next(userInfo);
    }

    isLoggedIn() {
        return localStorage.getItem('meowfacts') != null;
    }

    signOut() {
        localStorage.removeItem('meowfacts');
        this.router.navigate(['login']);
    }
}