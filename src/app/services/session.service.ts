import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private currentUser: User | null = null;

  setCurrentUser(user: User): void {
    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getCurrentUser(): User | null {
    if (!this.currentUser) {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        this.currentUser = JSON.parse(storedUser);
      }
    }
    return this.currentUser;
  }

  clearSession(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }
}
