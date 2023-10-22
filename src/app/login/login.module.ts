import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {LoginRoutingModule} from './login-routing.module';
import {LoginService} from './services/login.service';

@NgModule({
    imports: [LoginRoutingModule, HttpClientModule],
    providers: [LoginService]
})
export class LoginModule {}