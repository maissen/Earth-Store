import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-products-grid-container',
  templateUrl: './products-grid-container.component.html',
  styleUrls: ['./products-grid-container.component.scss']
})
export class ProductsGridContainerComponent implements OnInit {
  @Input() hasFilter: boolean = false;
  @Input() products: any[] = [];
  filterText: string = '';
  minPrice: number = 0;
  maxPrice: number = 1000;
  priceLimits = { min: 0, max: 1000 };

  constructor(
    private router: Router,
    private shoppingListService: ShoppingListService,
    private sessionService: SessionService
  ) {}

  ngOnInit() {
    this.setPriceLimits();
  }

  setPriceLimits() {
    const prices = this.products.map(p => p.price);
    this.priceLimits.min = Math.min(...prices);
    this.priceLimits.max = Math.max(...prices);
    this.minPrice = this.priceLimits.min;
    this.maxPrice = this.priceLimits.max;
  }

  filteredProducts() {
    if (!this.hasFilter) {
      return this.products;
    }

    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.filterText.toLowerCase()) &&
      product.price >= this.minPrice &&
      product.price <= this.maxPrice
    );
  }

  updateMinPrice(value: number) {
    this.minPrice = Math.min(value, this.maxPrice - 1);
  }

  updateMaxPrice(value: number) {
    this.maxPrice = Math.max(value, this.minPrice + 1);
  }

  onProductClick(product: any): void {
    this.router.navigate(['/product-info'], { state: { productData: product } });
  }

  onAddToCart(product: any): void {
    const currentUser = this.sessionService.getCurrentUser();
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
