import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { SessionService } from 'src/app/services/session.service';
import { ShoppingList } from 'src/app/models/shoppingList.interface';
import { Product } from 'src/app/models/produuct.interface';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  shoppingList: ShoppingList | null | undefined = null;
  currentUser: User | null = null;

  constructor(
    private shoppingListService: ShoppingListService,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.loadCurrentUser();
  }

  loadCurrentUser(): void {
    this.currentUser = this.sessionService.getCurrentUser();
    if (!this.currentUser) {
      console.error('No user is logged in.');
      return;
    }
    this.loadShoppingList();
  }

  loadShoppingList(): void {
    if (!this.currentUser) {
      console.error('No user is logged in.');
      return;
    }

    this.shoppingListService.getShoppingList(this.currentUser.id).subscribe(
      (data: ShoppingList) => {
        this.shoppingList = data;
      },
      (error) => {
        console.error('Error loading shopping list:', error);
      }
    );
  }

  removeProduct(product: Product): void {
    if (!this.currentUser) {
      console.error('No user is logged in.');
      return;
    }

    this.shoppingListService.removeProductFromList(this.currentUser.id, product).subscribe(
      (user) => {
        this.shoppingList = user.shoppingList;
      },
      (error) => {
        console.error('Error removing product:', error);
      }
    );
  }
}
