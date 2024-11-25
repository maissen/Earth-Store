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

        const existingProduct = user.shoppingList.products.find(p => p.name === product.name);
        if (existingProduct) {
          existingProduct.quantity = (existingProduct.quantity || 1) + (product.quantity || 1);
        } else {
          user.shoppingList.products.push({ ...product, quantity: product.quantity || 1 });
        }

        user.shoppingList.totalPrice += product.price * (product.quantity || 1);

        return this.http.put<User>(`${this.usersApiUrl}/${userId}`, user);
      })
    );
  }

  removeProductFromList(userId: string, product: Product): Observable<User> {
    return this.http.get<User>(`${this.usersApiUrl}/${userId}`).pipe(
      switchMap((user: User) => {
        if (user.shoppingList) {
          user.shoppingList.products = user.shoppingList.products.filter(p => p.name !== product.name);
          user.shoppingList.totalPrice -= product.price * (product.quantity || 1);
        }

        return this.http.put<User>(`${this.usersApiUrl}/${userId}`, user);
      })
    );
  }
}

