import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemList: any = [];
  productList = new BehaviorSubject<any>([]);
  getCart = localStorage.getItem('cart');
  constructor() { }

  setCart(item:any){
    localStorage.setItem('cart', JSON.stringify(item));
  }

  getProduct() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any){
    this.cartItemList.push(product);
    this.setCart(this.cartItemList)
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((item: any) => {
      grandTotal += item.price;
    });
    return grandTotal;
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1); //one item remove from cart item.
      }
    });
    this.productList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
