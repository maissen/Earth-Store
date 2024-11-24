import { Component } from '@angular/core';
import { ProductsGridContainerComponent } from '../../../../modules/products-grid-container/products-grid-container.component';

@Component({
  selector: 'app-home-new-arrivals',
  standalone: true,
  imports: [
    ProductsGridContainerComponent,
    
  ],
  templateUrl: './home-new-arrivals.component.html',
  styleUrl: './home-new-arrivals.component.scss'
})
export class HomeNewArrivalsComponent {

}
