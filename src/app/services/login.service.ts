import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginUrl = 'https://fakestoreapi.com/auth/login';

  constructor(private http: HttpClient, private router: Router) {}

  loginUser(userDetail: any) {
    return this.http.post<any>(this.loginUrl, userDetail);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['products']);
  }
}
