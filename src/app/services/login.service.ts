import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SessionService } from './session.service';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient,
    private router: Router,
    private sessionService: SessionService
  ) {}

  login(email: string, password: string): Observable<User> {
    return this.http.get<User[]>(`${this.apiUrl}?email=${email}`).pipe(
      map((users) => {
        const user = users.find((u) => u.email === email && u.password === password);
        if (user) {
          this.sessionService.setCurrentUser(user);
          alert(user.name)
          if (user.usertype === 'regular') {
            this.router.navigate(['/home']);
          } else if (user.usertype === 'admin') {
            this.router.navigate(['/dashboard']);
          }
          return user;
        } else {
          throw new Error('Invalid email or password');
        }
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
