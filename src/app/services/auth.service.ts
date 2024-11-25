import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
