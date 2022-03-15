import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalItem : number = 0;
  constructor(public loginService: LoginService, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe((res)=>{
      this.totalItem = res.length;
    })
  }

}
