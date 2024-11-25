import { Component } from '@angular/core';
import { ContactSubmissionsService } from 'src/app/services/contact-submissions.service';
import { contactSubmission } from 'src/app/models/contactSubmission.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  fullName: string = '';
  email: string = '';
  message: string = '';

  constructor(private contactService: ContactSubmissionsService) {}

  submitForm(contactForm: NgForm) {
    const contact: contactSubmission = {
      fullName: this.fullName,
      email: this.email,
      message: this.message
    };

    this.contactService.submitContact(contact).subscribe(
      (response) => {
        console.log('Contact form submitted successfully', response);
        alert('Your message has been submitted successfully!');
        contactForm.reset();
      },
      (error) => {
        console.error('Error submitting contact form', error);
        alert('There was an error submitting your message. Please try again.');
      }
    );
  }
}
