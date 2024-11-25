import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ShoppingList } from '../models/shoppingList.interface';
import { Product } from '../models/produuct.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private apiUrl = 'http://localhost:3002/shoppingList';

  constructor(private http: HttpClient) {}

  getShoppingList(): Observable<ShoppingList> {
    return this.http.get<ShoppingList>(this.apiUrl);
  }

  addProductToShoppingList(product: Product): Observable<ShoppingList> {
    return this.http.get<ShoppingList>(this.apiUrl).pipe(
      switchMap((shoppingList: ShoppingList) => {
        const existingProduct = shoppingList.products.find((p: Product) => p.name === product.name);

        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          product.quantity = 1;
          shoppingList.products.push(product);
        }

        shoppingList.totalPrice = shoppingList.products.reduce(
          (total: number, prod: Product) => total + prod.price * prod.quantity,
          0
        );

        return this.http.put<ShoppingList>(this.apiUrl, shoppingList);
      })
    );
  }
}
