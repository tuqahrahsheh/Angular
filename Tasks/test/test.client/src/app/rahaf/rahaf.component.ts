import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../products/services/product.service'; // Assuming you're fetching products using ProductService

@Component({
  selector: 'app-rahaf',
  templateUrl: './rahaf.component.html',
  styleUrls: ['./rahaf.component.css']
})
export class RahafComponent implements OnInit {
  products: Product[] = []; // Declare the products property with the proper type

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    // Fetch the products using ProductService
    this.productService.getProductsByCategory(1).subscribe(
      (data: Product[]) => {
        this.products = data; // Assign the fetched products to the products property
      },
      error => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
