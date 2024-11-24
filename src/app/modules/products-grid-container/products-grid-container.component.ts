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
  @Input() products: any;
}
