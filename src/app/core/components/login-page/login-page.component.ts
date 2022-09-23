import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  isSubmitted = false;
  isError = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onLogin() {
    if (this.form.invalid || this.isSubmitted) {
      return;
    }
    this.isSubmitted = true;
    const user: User = this.form.getRawValue();

    this.auth.login(user).subscribe(
      (res) => {
        this.isError = false;
        this.form.reset();
        this.auth.userName$.next(res.firstName);
        this.router.navigate(['/products']);
        this.isSubmitted = false;
      },
      (error) => {
        this.isSubmitted = false;
        this.isError = true;
        this.errorMessage = error.error.message;
      }
    )
  }

  private initForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
}
