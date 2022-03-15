import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItemList: any = [];
  productList: BehaviorSubject<any> = new BehaviorSubject([]);
  getCart:any = localStorage.getItem('cart');
  constructor() {}

  setProduct(item: any) {
    localStorage.setItem('cart', JSON.stringify(item));
  }

  getProduct( ) {
      this.productList.next(JSON.parse(localStorage.getItem('cart')));
  }

  setCartItem() {
      this.cartItemList = JSON.parse(localStorage.getItem('cart'));
  }

  addToCart(product: any) {
    this.cartItemList.push(product);
    this.setProduct(this.cartItemList);
    this.getTotalPrice();
    this.getProduct();  
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    if (this.getCart != null) {
      let cartArray = JSON.parse(this.getCart);
      cartArray.map((item: any) => {
        grandTotal += item.price;
      });
    }
    return grandTotal;
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1); //one item remove from cart item.
      }
    });
    this.setProduct(this.cartItemList);
    this.getProduct();
  }

  removeAllCart() {
    this.cartItemList = [];
    this.setProduct(this.cartItemList);
    this.getProduct();
  }
}
