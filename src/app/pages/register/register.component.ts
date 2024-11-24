import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user.interface'; // Adjust the path if necessary
import { RegisterService } from 'src/app/services/register.service'; // Adjust the path if necessary

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

  constructor(private registerService: RegisterService, private router: Router) {}

  onRegister() {
    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.registerService.registerUser(this.user).subscribe(
      () => {
        alert('User registered successfully!');
        this.router.navigate(['/home']);
      },
      (error) => {
        alert('Registration failed. The email might already be registered.');
        console.error(error);
      }
    );
  }
}
