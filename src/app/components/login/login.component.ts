import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  passwordVisible = false;

  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  ngOnInit(): void {
    this.form();
  }

  form() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submit() {
    let loginUserData = {
      username: this.loginForm.value.userName,
      password: this.loginForm.value.password,
    };
    this.loginService.loginUser(loginUserData).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
      },
      (err) => console.log(err)
    );
    this.loginForm.reset();
  }
}
