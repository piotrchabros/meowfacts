import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '../material/material.module';
import {LoginComponent} from './login.component';

const routes: Routes = [{
    path: '',
    component: LoginComponent
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        MaterialModule,
        ReactiveFormsModule,
        CommonModule,
        MatPasswordStrengthModule
    ],
    declarations: [LoginComponent],
})
export class LoginRoutingModule {}