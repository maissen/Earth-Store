import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { User } from '../models/user.interface';
import { Product } from '../models/produuct.interface';
import { ShoppingList } from '../models/shoppingList.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private usersApiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getShoppingList(userId: string): Observable<ShoppingList> {
    return this.http.get<User>(`${this.usersApiUrl}/${userId}`).pipe(
      map((user: User) => user.shoppingList || { products: [], totalPrice: 0 })
    );
  }

  addProductToShoppingList(userId: string, product: Product): Observable<User> {
    return this.http.get<User>(`${this.usersApiUrl}/${userId}`).pipe(
      switchMap((user: User) => {
        if (!user.shoppingList) {
          user.shoppingList = { products: [], totalPrice: 0 };
        }
  
        // Check if the product already exists in the shopping list by comparing product IDs or names
        const existingProduct = user.shoppingList.products.find(p => p.name === product.name);
        if (existingProduct) {
          // Optionally, handle updating quantity or price here
          return this.updateProductInShoppingList(user, existingProduct, product);
        }
  
        // Add new product if it doesn't exist
        user.shoppingList.products.push(product);
        user.shoppingList.totalPrice += product.price;
        user.shoppingList.totalPrice = Math.round(user.shoppingList.totalPrice * 100) / 100;
  
        return this.http.put<User>(`${this.usersApiUrl}/${userId}`, user);
      })
    );
  }
  
  private updateProductInShoppingList(user: User, existingProduct: Product, product: Product): Observable<User> {
    // Logic to update existing product (e.g., increment quantity)
    user.shoppingList.totalPrice += product.price;
    user.shoppingList.totalPrice = Math.round(user.shoppingList.totalPrice * 100) / 100;
  
    return this.http.put<User>(`${this.usersApiUrl}/${user.id}`, user);
  }
  
  

  removeProductFromList(userId: string, product: Product): Observable<User> {
    return this.http.get<User>(`${this.usersApiUrl}/${userId}`).pipe(
      switchMap((user: User) => {
        if (user.shoppingList) {
          user.shoppingList.products = user.shoppingList.products.filter(p => p.name !== product.name);
          user.shoppingList.totalPrice -= product.price;
        }

        return this.http.put<User>(`${this.usersApiUrl}/${userId}`, user);
      })
    );
  }
}

