import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-products-grid-container',
  templateUrl: './products-grid-container.component.html',
  styleUrls: ['./products-grid-container.component.scss']
})
export class ProductsGridContainerComponent {
  @Input() products: any;

  constructor(
    private router: Router,
    private shoppingListService: ShoppingListService,
    private sessionService: SessionService 
  ) {}

  onProductClick(product: any): void {
    this.router.navigate(['/product-info'], { state: { productData: product } });
  }

  onAddToCart(product: any): void {
    const currentUser = this.sessionService.getCurrentUser(); // Get the logged-in user
    if (!currentUser) {
      alert('No user is logged in.');
      return;
    }
  
    this.shoppingListService.addProductToShoppingList(currentUser.id, product).subscribe(
      () => {
        alert(`${currentUser.name}, the product "${product.name}" was added to your cart.`);
      },
      (error) => {
        console.error('Error adding product to the cart:', error);
        alert('Error adding product to the cart.');
      }
    );
  }
  
}
