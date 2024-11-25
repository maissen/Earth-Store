import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/user.interface';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: User = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    usertype: 'regular'
  };

  constructor(
    private registerService: RegisterService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  onRegister() {
    // Field verification
    if (!this.user.name || !this.user.email || !this.user.password || !this.user.confirmPassword) {
      this.snackBar.open('All fields are required!', 'Close', { duration: 3000 });
      return;
    }

    // Password match verification
    if (this.user.password !== this.user.confirmPassword) {
      this.snackBar.open('Passwords do not match!', 'Close', { duration: 3000 });
      return;
    }

    // Registration
    this.registerService.registerUser(this.user).subscribe(
      () => {
        this.snackBar.open('User registered successfully!', 'Close', { duration: 3000 });
        this.router.navigate(['/home']);
      },
      (error) => {
        this.snackBar.open('Registration failed: Email might already be registered.', 'Close', { duration: 3000 });
        console.error(error);
      }
    );
  }
}
