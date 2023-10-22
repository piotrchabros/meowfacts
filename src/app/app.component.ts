import {Component} from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {AuthService, UserInfo} from './auth/auth.service';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userInfo!: UserInfo;

  constructor(private authService: AuthService) {
    this.authService.userInfo$
    .pipe(
      untilDestroyed(this)
    )
    .subscribe(userInfo => this.userInfo = userInfo);
  }

  isSignedIn() {
    return this.authService.isLoggedIn();
  }

  signOut() {
    return this.authService.signOut();
  }
}
