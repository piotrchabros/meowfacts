import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {authenticationGuard} from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'meowfacts',
    loadChildren: () => import('./meowfacts/meowfacts.module').then(m => m.MeowfactsModule),
    canActivate: [authenticationGuard()]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
