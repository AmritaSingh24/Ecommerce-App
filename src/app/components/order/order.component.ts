import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  productData!: any;
  productlist: any = [];
  getCart = localStorage.getItem('cart');

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    let getId = this.route.snapshot.paramMap.get('id');
    this.productService.getSingleProduct(getId).subscribe((res) => {
      this.productData = res;
    });
    this.cartService.setCartItem();
  }

  addToCart(productData: any) {
    this.cartService.addToCart(productData);
  }
}
