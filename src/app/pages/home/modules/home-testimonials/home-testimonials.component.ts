import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { contactSubmission } from 'src/app/models/contactSubmission.interface';

interface Testimonial {
  text: string;
  username: string;
}

@Component({
  selector: 'home-testimonials',
  templateUrl: './home-testimonials.component.html',
  styleUrls: ['./home-testimonials.component.scss']
})
export class HomeTestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [];
  private apiUrl = 'http://localhost:3001/submissions';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchTestimonials();
  }

  fetchTestimonials(): void {
    this.http.get<any>(this.apiUrl).subscribe(
      (data) => {
        console.log('Fetched data:', data);
        if (data && Array.isArray(data)) {
          const formattedTestimonials = data.map((submission: contactSubmission) => ({
            text: submission.message,
            username: submission.fullName
          }));
          this.testimonials = formattedTestimonials.slice(-3);
        } else {
          console.error('No valid data found.');
        }
      },
      (error) => {
        console.error('Error fetching testimonials:', error);
      }
    );
  }

  get displayedTestimonials(): Testimonial[] {
    return this.testimonials;
  }
}
