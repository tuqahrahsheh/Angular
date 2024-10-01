import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  categoryId?: number;
}

@Injectable({
  providedIn: 'root'  // Makes this service available application-wide
})
export class ProductService {
  private apiUrl = 'https://localhost:7227/api/Products';

  constructor(private http: HttpClient) { }

  getProductsByCategory(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/ByCategory/${id}`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}
