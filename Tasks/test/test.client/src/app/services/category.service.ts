import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Category {
  id: number;                // id of the category
  categoryName: string;       // name of the category
  disc?: string;              // optional description (may be null)
  img?: string;               // optional image (may be null)
}


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'https://localhost:7227/api/Categories'; // API URL for Categories

  constructor(private http: HttpClient) { }

  // Return Observable<Category[]> to have proper typing
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }
}
