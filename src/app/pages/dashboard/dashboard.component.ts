import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/produuct.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.http.get<Product[]>(this.apiUrl).subscribe((data) => {
      this.products = data;
      this.showSnackbar('Products loaded successfully.');
    });
  }

  addNewProduct(): void {
    this.isEditing = false;
    this.productForm = this.resetProductForm();
    this.isFormVisible = true;
    this.showSnackbar('Ready to add a new product.');
  }

  editProduct(product: Product): void {
    this.isEditing = true;
    this.productForm = { ...product };
    this.isFormVisible = true;
    this.showSnackbar('You are editing a product.');
  }

  saveProduct(): void {
    if (!this.isProductFormValid()) {
      this.showSnackbar('Please fill in all fields before submitting.');
      return;
    }

    const productToSave = { ...this.productForm };

    if (this.isEditing) {
      this.http.put(`${this.apiUrl}/${this.productForm.id}`, productToSave)
        .subscribe(() => {
          const index = this.products.findIndex((p) => p.id === this.productForm.id);
          if (index !== -1) {
            this.products[index] = { ...this.productForm };
          }
          this.showSnackbar('Product updated successfully.');
        });
    } else {
      this.http.post<Product>(this.apiUrl, productToSave)
        .subscribe((newProduct: Product) => {
          this.products.push(newProduct);
          this.showSnackbar('New product added successfully.');
        });
    }

    this.isFormVisible = false;
    this.productForm = this.resetProductForm();
  }

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.http.delete(`${this.apiUrl}/${id}`)
        .subscribe(() => {
          this.products = this.products.filter((product) => product.id !== id);
          this.showSnackbar('Product deleted successfully.');
        });
    }
  }

  cancel(): void {
    this.isFormVisible = false;
    this.productForm = this.resetProductForm();
    this.showSnackbar('Action canceled.');
  }

  private resetProductForm(): Product {
    return {
      id: 0,
      category: '',
      name: '',
      description: '',
      price: 0,
      img: ''
    };
  }

  private isProductFormValid(): boolean {
    return (
      this.productForm.name.trim() !== '' &&
      this.productForm.category.trim() !== '' &&
      this.productForm.description.trim() !== '' &&
      this.productForm.price > 0 &&
      this.productForm.img.trim() !== ''
    );
  }

  private showSnackbar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }
}
