import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  registerUser(newUser: User): Observable<User> {
    return this.http.get<User[]>(`${this.apiUrl}?email=${newUser.email}`).pipe(
      map((users) => {
        if (users.length > 0) {
          console.log('Email already exists:', users);
          throw new Error('Email already exists');
        }
        return newUser;
      }),
      switchMap((user) => {
        console.log('Creating new user:', user);
        return this.http.post<User>(this.apiUrl, user); 
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
