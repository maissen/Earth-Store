import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './session.service';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router, private sessionService: SessionService) {}

  login(user: User): void {
    this.sessionService.setCurrentUser(user);
  }

  logout(): void {
    this.sessionService.clearCurrentUser();
    this.router.navigate(['/login']);
  }
}
