import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList!: any;
  filterCategory: any;
  constructor(private productService: ProductService,
    private cartService : CartService) {}

  ngOnInit(): void {
    // get all products
    this.productService.getAllProducts().subscribe((res) => {
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((item: any) => {
        if (
          item.category == "women's clothing" ||
          item.category == "men's clothing"
        ) {
          item.category = 'fashion';
        }
      });
    });
    this.cartService.getProduct();
  }
  filter(category: string) {
    this.filterCategory = this.productList.filter((item: any) => {
      if (item.category == category || category == '') {
        return item;
      }
    });
  }

}
