import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'home-new-arrivels',
  templateUrl: './home-new-arrivels.component.html',
  styleUrls: ['./home-new-arrivels.component.scss']
})
export class HomeNewArrivelsComponent implements OnInit {
  products: any[] = [];
  private apiUrl = 'http://localhost:3003/products';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchNewArrivals();
  }

  fetchNewArrivals(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        console.log('Fetched data:', data);
        this.products = data.slice(-3);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
