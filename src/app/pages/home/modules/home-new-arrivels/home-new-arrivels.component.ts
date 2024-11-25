import { Component } from '@angular/core';

@Component({
  selector: 'home-new-arrivels',
  templateUrl: './home-new-arrivels.component.html',
  styleUrls: ['./home-new-arrivels.component.scss']
})
export class HomeNewArrivelsComponent {
  products: any = [
    { category: "postcard", name: "postcard 1", price: 10.99, img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg" },
    { category: "postcard", name: "postcard 13", price: 70.25, img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg" },
    { category: "postcard", name: "postcard 14", price: 75.80, img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg" }
  ];
}
