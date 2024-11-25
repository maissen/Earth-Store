import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-grid-container',
  templateUrl: './products-grid-container.component.html',
  styleUrls: ['./products-grid-container.component.scss']
})
export class ProductsGridContainerComponent {
  @Input() products: any;

  constructor(private router: Router) {}

  onProductClick(product: any): void {
    this.router.navigate(['/product-info'], { state: { productData: product } });
  }
}
