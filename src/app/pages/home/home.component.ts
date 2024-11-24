import { Component } from '@angular/core';
import { HomeHeaderComponent } from './modules/home-header/home-header.component';
import { HomeNewArrivalsComponent } from './modules/home-new-arrivals/home-new-arrivals.component';
import { HomeRecommendationComponent } from './modules/home-recommendation/home-recommendation.component';
import { HomeTestimonialsComponent } from './modules/home-testimonials/home-testimonials.component';
import { FooterComponent } from "../../modules/footer/footer.component";
import { NavbarComponent } from "../../modules/navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeHeaderComponent,
    HomeNewArrivalsComponent,
    HomeTestimonialsComponent,
    HomeRecommendationComponent,
    FooterComponent,
    NavbarComponent,
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
