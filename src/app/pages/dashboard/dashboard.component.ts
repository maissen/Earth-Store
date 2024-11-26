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

  // Fetch products from the server
  fetchProducts(): void {
    this.http.get<Product[]>(this.apiUrl).subscribe((data) => {
      this.products = data;
    });
  }

  // Show the form to add a new product
  addNewProduct(): void {
    this.isEditing = false;
    this.productForm = this.resetProductForm();
    this.isFormVisible = true;
    this.showSnackbar('Ready to add a new product.');
  }

  // Show the form to edit an existing product
  editProduct(product: Product): void {
    this.isEditing = true;
    this.productForm = { ...product };
    this.isFormVisible = true;
    this.showSnackbar('You are editing a product.');
  }

  // Save the product (add or update)
  saveProduct(): void {
    if (!this.isProductFormValid()) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    const productToSave = { ...this.productForm };

    if (this.isEditing) {
      // Update existing product
      this.http.put(`${this.apiUrl}/${this.productForm.id}`, productToSave)
        .subscribe(() => {
          const index = this.products.findIndex((p) => p.id === this.productForm.id);
          if (index !== -1) {
            this.products[index] = { ...this.productForm };  // Update the local list
          }
          this.showSnackbar('Product updated successfully.');
        });
    } else {
      // Add new product and expect a Product response
      this.http.post<Product>(this.apiUrl, productToSave)  // Specify Product as the response type
        .subscribe((newProduct: Product) => {
          this.products.push(newProduct);  // Add to local list after server update
          this.showSnackbar('New product added successfully.');
        });
    }

    this.isFormVisible = false;
    this.productForm = this.resetProductForm();
  }

  // Delete a product
  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.http.delete(`${this.apiUrl}/${id}`)
        .subscribe(() => {
          this.products = this.products.filter((product) => product.id !== id);
          this.showSnackbar('Product deleted successfully.');
        });
    }
  }

  // Cancel the current action (add or edit)
  cancel(): void {
    this.isFormVisible = false;
    this.productForm = this.resetProductForm();
    this.showSnackbar('Action canceled.');
  }

  // Reset the product form
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

  // Validate the product form fields
  private isProductFormValid(): boolean {
    return (
      this.productForm.name.trim() !== '' &&
      this.productForm.category.trim() !== '' &&
      this.productForm.description.trim() !== '' &&
      this.productForm.price > 0 &&
      this.productForm.img.trim() !== ''
    );
  }

  // Show a snackbar with a message
  private showSnackbar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Duration of the snackbar in milliseconds
    });
  }
}
