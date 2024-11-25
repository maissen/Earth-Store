import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { ShoppingList } from 'src/app/models/shoppingList.interface';
import { Product } from 'src/app/models/produuct.interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  shoppingList: ShoppingList | null = null;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.loadShoppingList();
  }

  loadShoppingList(): void {
    this.shoppingListService.getShoppingList().subscribe(
      (data: ShoppingList) => {
        this.shoppingList = data;
      },
      (error) => {
        console.error('Error loading shopping list:', error);
      }
    );
  }

  removeProduct(product: Product): void {
    this.shoppingListService.removeProductFromList(product).subscribe(
      (updatedList: ShoppingList) => {
        this.shoppingList = updatedList;
      },
      (error) => {
        console.error('Error removing product:', error);
      }
    );
  }
}
