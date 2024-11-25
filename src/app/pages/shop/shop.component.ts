import { Component } from '@angular/core';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  products: any = [
    { category: "postcard", name: "postcard 1", price: 10.99, img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg" },
    { category: "postcard", name: "postcard 2", price: 15.49, img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg" },
    { category: "postcard", name: "postcard 3", price: 20.75, img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg" },
    { category: "postcard", name: "postcard 4", price: 25.20, img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg" },
    { category: "postcard", name: "postcard 5", price: 30.10, img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg" },
    { category: "postcard", name: "postcard 6", price: 35.85, img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg" },
    { category: "postcard", name: "postcard 7", price: 40.95, img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg" },
    { category: "postcard", name: "postcard 8", price: 45.60, img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg" },
    { category: "postcard", name: "postcard 9", price: 50.35, img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg" },
    { category: "postcard", name: "postcard 10", price: 55.75, img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg" },
    { category: "postcard", name: "postcard 11", price: 60.40, img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg" },
    { category: "postcard", name: "postcard 12", price: 65.99, img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg" },
    { category: "postcard", name: "postcard 13", price: 70.25, img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg" },
    { category: "postcard", name: "postcard 14", price: 75.80, img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg" }
  ];
}
