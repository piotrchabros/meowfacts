import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginForm = new FormGroup({
        username: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.pattern('')])
    });

    constructor(private loginService: LoginService) {
        
    }

    login() {
        if (this.loginForm.valid) {
            this.loginService.login(this.loginForm.getRawValue()).subscribe();
        }
    }
}