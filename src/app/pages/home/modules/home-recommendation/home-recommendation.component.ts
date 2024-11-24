import { Component } from '@angular/core';
import { BtnFilledComponent } from '../../../../modules/btn-filled/btn-filled.component';

@Component({
  selector: 'app-home-recommendation',
  standalone: true,
  imports: [
    BtnFilledComponent
  ],
  templateUrl: './home-recommendation.component.html',
  styleUrl: './home-recommendation.component.scss'
})
export class HomeRecommendationComponent {

}
