import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { contactSubmission } from '../models/contactSubmission.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactSubmissionsService {
  private apiUrl = 'http://localhost:3001/submissions';

  constructor(private http: HttpClient) { }

  submitContact(contact: contactSubmission): Observable<contactSubmission> {
    return this.http.post<contactSubmission>(this.apiUrl, contact);
  }
}
