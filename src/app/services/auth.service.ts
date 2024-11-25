import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;

  constructor(private router: Router, private sessionService: SessionService) {}

  logout(): void {
    this.sessionService.clearSession();
    this.isLoggedIn = false;
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }
}
