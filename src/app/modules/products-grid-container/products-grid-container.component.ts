import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private sessionService: SessionService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.setPriceLimits();
  }

  setPriceLimits() {
    if (this.products && this.products.length > 0) {
      const prices = this.products.map(p => p.price);
      this.priceLimits.min = Math.min(...prices);
      this.priceLimits.max = Math.max(...prices);
      this.minPrice = this.priceLimits.min;
      this.maxPrice = this.priceLimits.max;
    }
  }

  filteredProducts() {
    console.log('Filtering products with:', this.filterText, this.minPrice, this.maxPrice);
  
    if (!this.hasFilter) {
      return this.products;
    }
  
    return this.products.filter(product => {
      const matchesText = product.name && product.name.toLowerCase().includes(this.filterText.toLowerCase());
      const matchesPrice = product.price >= this.minPrice && product.price <= this.maxPrice;
  
      // Log to ensure the filter is being applied correctly
      console.log(`Product: ${product.name}, Price: ${product.price}, Matches: ${matchesText && matchesPrice}`);
  
      return matchesText && matchesPrice;
    });
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
      this.snackBar.open('No user is logged in.', '', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
      return;
    }

    this.shoppingListService.addProductToShoppingList(currentUser.id, product).subscribe(
      () => {
        this.snackBar.open(`product "${product.name}" was added to your cart.`, '', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
      },
      (error) => {
        console.error('Error adding product to the cart:', error);
        this.snackBar.open('Error adding product to the cart.', '', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    );
  }
}
