import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private snackbarSubject = new Subject<{ message: string, type: 'success' | 'error' }>();

  snackbar$ = this.snackbarSubject.asObservable();

  showSnackbar(message: string, type: 'success' | 'error'): void {
    this.snackbarSubject.next({ message, type });
  }
}
