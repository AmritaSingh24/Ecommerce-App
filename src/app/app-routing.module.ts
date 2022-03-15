import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { GuardGuard } from './guards/guard.guard';

const routes: Routes = [
  {
    path: 'login', 
    component: LoginComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'cart', 
    component:CartComponent
  },
  {
    path: 'products', 
    component: ProductsComponent
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'order/:id',
    component:OrderComponent,
    canActivate: [AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
