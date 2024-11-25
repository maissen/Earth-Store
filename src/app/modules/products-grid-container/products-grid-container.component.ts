import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-products-grid-container',
  templateUrl: './products-grid-container.component.html',
  styleUrls: ['./products-grid-container.component.scss']
})
export class ProductsGridContainerComponent {
  @Input() products: any;

  constructor(private router: Router, private shoppingListService: ShoppingListService) {}

  onProductClick(product: any): void {
    this.router.navigate(['/product-info'], { state: { productData: product } });
  }

  onAddToCart(product: any): void {
    this.shoppingListService.addProductToShoppingList(product).subscribe(
      () => {
        console.log('Product added to the cart:', product);
      },
      (error) => {
        console.error('Error adding product to the cart:', error);
      }
    );
  }
}
