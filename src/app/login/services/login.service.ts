import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {tap} from 'rxjs';
import {AuthService} from 'src/app/auth/auth.service';
import {environment} from 'src/environments/environment';
import {UsernamePassword} from '../models/login';

@Injectable()
export class LoginService {
    private baseUrl = environment.baseUrl + '/login';

    constructor(
        private http: HttpClient,
        private auth: AuthService,
        private router: Router
    ) {}

    login(usernamePassword: UsernamePassword) {
        return this.http.get<{jwt: string}>('/assets/userInfo.json')
                .pipe(
                    tap(token => this.auth.saveToken(token.jwt)),
                    tap(() => this.router.navigate(['meowfacts']))
                )
    }
}