import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { SessionService } from 'src/app/services/session.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private loginService: LoginService,
    private sessionService: SessionService,
    private router: Router,
    private snackbarService: SnackbarService,
  ) {}

  onLogin(): void {
    this.loginService.login(this.email, this.password).subscribe(
      (user) => {
        this.snackbarService.showSnackbar('Login successful! Welcome ' + user.name, 'success');
        if (user.usertype === 'regular') {
          this.router.navigate(['/home']);
        } else if (user.usertype === 'admin') {
          this.router.navigate(['/dashboard']);
        }
      },
      (error) => {
        this.snackbarService.showSnackbar(error.message || 'Login failed. Please try again.', 'error');
      }
    );
  }
}
