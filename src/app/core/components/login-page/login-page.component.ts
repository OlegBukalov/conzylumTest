import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onLogin() {
    if (this.form.valid) {

    }
  }

  private initForm() {
    this.form = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
}
