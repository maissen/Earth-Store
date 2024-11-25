import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-grid-container',
  templateUrl: './products-grid-container.component.html',
  styleUrls: ['./products-grid-container.component.scss']
})
export class ProductsGridContainerComponent {
  @Input() products: any;
}
