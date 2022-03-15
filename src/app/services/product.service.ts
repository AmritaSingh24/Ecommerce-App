import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { single } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  allProducts = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(this.allProducts);
  }

  getSingleProduct(id: any) {
    let singleProduct = `https://fakestoreapi.com/products/${id}`;
    return this.http.get(singleProduct);
  }
}
