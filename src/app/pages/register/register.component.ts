import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/user.interface';
import { RegisterService } from 'src/app/services/register.service';
import { SessionService } from 'src/app/services/session.service'; // Import SessionService

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: User = {
    id: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    usertype: 'regular',
    shoppingList: {
      products: [],
      totalPrice: 0
    }
  };

  constructor(
    private registerService: RegisterService,
    private sessionService: SessionService, // Inject SessionService
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

    // Set a default shoppingList if not provided
    if (!this.user.shoppingList) {
      this.user.shoppingList = { products: [], totalPrice: 0 };
    }

    // Registration
    this.registerService.registerUser(this.user).subscribe(
      (user) => {
        // After successful registration, update the session with the logged-in user
        this.sessionService.setCurrentUser(user);
        
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
