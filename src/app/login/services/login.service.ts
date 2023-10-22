import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';

@Injectable()
export class LoginService {
    private baseUrl = environment.baseUrl + '/login';

    constructor(private http: HttpClient) {

    }

    login() {
        return this.http.get(this.baseUrl);
    }
}