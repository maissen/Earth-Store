import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}`).pipe(
      map((users) => {
        const user = users.find((u) => u.email === email && u.password === password);
        if (user) {
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
