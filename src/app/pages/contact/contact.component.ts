import { Component, OnInit } from '@angular/core';
import { ContactSubmissionsService } from 'src/app/services/contact-submissions.service';
import { contactSubmission } from 'src/app/models/contactSubmission.interface';
import { NgForm } from '@angular/forms';
import { SessionService } from 'src/app/services/session.service';
import { User } from 'src/app/models/user.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  fullName: string = '';
  email: string = '';
  message: string = '';
  currentUser: User | null = null;

  constructor(
    private contactService: ContactSubmissionsService,
    private sessionService: SessionService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.currentUser = this.sessionService.getCurrentUser();
    
    if (this.currentUser) {
      this.fullName = this.currentUser.name;
      this.email = this.currentUser.email;
    }
  }

  submitForm(contactForm: NgForm) {
    if (!this.fullName || !this.email || !this.message) {
      this.snackBar.open('Please fill out all fields before submitting.', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
      return;
    }

    const contact: contactSubmission = {
      fullName: this.fullName,
      email: this.email,
      message: this.message
    };

    this.contactService.submitContact(contact).subscribe(
      (response) => {
        this.snackBar.open('Your message has been submitted successfully!', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
        contactForm.reset();
      },
      (error) => {
        this.snackBar.open('There was an error submitting your message. Please try again.', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
        console.error('Error submitting contact form', error);
      }
    );
  }
}
