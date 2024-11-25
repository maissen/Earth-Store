import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/produuct.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  products: Product[] = [];
  isFormVisible: boolean = false;
  isEditing: boolean = false;
  productForm: Product = this.resetProductForm();
  private readonly apiUrl = 'http://localhost:3003/products';

  constructor(private http: HttpClient) {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.http.get<Product[]>(this.apiUrl).subscribe((data) => {
      this.products = data;
    });
  }

  addNewProduct(): void {
    this.isEditing = false;
    this.productForm = this.resetProductForm();
    this.isFormVisible = true;
  }

  editProduct(product: Product): void {
    this.isEditing = true;
    this.productForm = { ...product };
    this.isFormVisible = true;
  }

  saveProduct(): void {
    // Check if any field is empty
    if (!this.isProductFormValid()) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    if (this.isEditing) {
      const index = this.products.findIndex((p) => p.id === this.productForm.id);
      if (index !== -1) {
        this.products[index] = { ...this.productForm };
      }
    } else {
      this.productForm.id = this.products.length + 1;
      this.products.push({ ...this.productForm });
    }

    this.isFormVisible = false;
    this.productForm = this.resetProductForm();
  }

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.products = this.products.filter((product) => product.id !== id);
    }
  }

  cancel(): void {
    this.isFormVisible = false;
    this.productForm = this.resetProductForm();
  }

  private resetProductForm(): Product {
    return {
      id: 0,
      category: '',
      name: '',
      description: '',
      price: 0,
      quantity: 0,
      img: ''
    };
  }

  private isProductFormValid(): boolean {
    return (
      this.productForm.name.trim() !== '' &&
      this.productForm.category.trim() !== '' &&
      this.productForm.description.trim() !== '' &&
      this.productForm.price > 0 &&
      this.productForm.quantity > 0 &&
      this.productForm.img.trim() !== ''
    );
  }
}
