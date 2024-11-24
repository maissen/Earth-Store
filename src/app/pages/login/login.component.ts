import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  onLogin(): void {
    this.loginService.login(this.email, this.password).subscribe(
      (user) => {
        // Handle successful login
      },
      (error) => {
        this.errorMessage = error.message || 'Login failed. Please try again.';
      }
    );
  }
}
