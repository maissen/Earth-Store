import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-grid-container',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './products-grid-container.component.html',
  styleUrl: './products-grid-container.component.scss'
})
export class ProductsGridContainerComponent{
  @Input() products: Array<{ 
    category: string, 
    name: string, 
    price: number, 
    img: string 
  }> = [
    { category: "postcard", name: "postcard 1", price: 10.99, img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg" },
    { category: "postcard", name: "postcard 2", price: 15.49, img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg" },
    { category: "postcard", name: "postcard 14", price: 75.80, img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg" }
  ];
  
}
