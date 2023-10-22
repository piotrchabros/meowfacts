import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from './auth.service';

export function authenticationGuard(): CanActivateFn {
    return () => {
      const authService: AuthService = inject(AuthService);
      const router: Router = inject(Router);

      if (authService.isLoggedIn()) {
        return true;
      }

      router.navigate(['login']);
      
      return false;
    };
  }