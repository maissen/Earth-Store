import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: any[] = [];  // Array to store fetched products

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.http.get<any[]>('http://localhost:3003/products').subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );
  }
}
