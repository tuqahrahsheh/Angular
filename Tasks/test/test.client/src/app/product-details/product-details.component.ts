import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product } from '../products/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product!: Product; 
  productId!: number; 

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
   
    this.route.paramMap.subscribe(params => {
      this.productId = Number(params.get('id'));
      this.fetchProductDetails(this.productId);
    });
  }

  fetchProductDetails(id: number): void {
   
    this.productService.getProductById(id).subscribe(
      (data: Product) => {
        this.product = data;
      },
      error => {
        console.error('Error fetching product details:', error);
      }
    );
  }
}
