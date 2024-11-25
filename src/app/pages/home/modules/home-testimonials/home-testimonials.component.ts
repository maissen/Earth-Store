import { Component } from '@angular/core';

interface Testimonial {
  text: string;
  username: string;
}

@Component({
  selector: 'home-testimonials',
  templateUrl: './home-testimonials.component.html',
  styleUrls: ['./home-testimonials.component.scss']
})
export class HomeTestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      text: 'Lorem qui quaerat iste vitae adipisci voluptatibus quis consectetur repellat laudantium sint, quos at culpa! Quidem dignissimos perspiciatis reiciendis similique voluptate.',
      username: 'Eya Yahyaoui'
    },
    {
      text: 'Aliquam quaerat rerum nobis eaque harum praesentium dolorem ab dolores quia asperiores distinctio officia eligendi nisi voluptate, fuga id corporis esse.',
      username: 'John Doe'
    },
    {
      text: 'Sint veritatis tempore voluptatum doloremque, nisi voluptas consequuntur qui molestiae facilis tempora exercitationem cumque quas nesciunt veniam.',
      username: 'Jane Smith'
    }
  ];

  get displayedTestimonials(): Testimonial[] {
    return this.testimonials.slice(0, 3);
  }
}
