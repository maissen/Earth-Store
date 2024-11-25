import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent {
  product: any;

  constructor(private router: Router) {
    this.product = this.router.getCurrentNavigation()?.extras.state?.['productData'];
    console.log('Product Info:', this.product);
  }
}
