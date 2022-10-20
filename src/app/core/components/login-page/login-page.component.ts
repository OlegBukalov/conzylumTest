import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../models/user.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public isSubmitted = false;
  public isError = false;
  public errorMessage = '';
  public isLoadingCompleted = true;
  private subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onLogin(): void {
    if (this.form.invalid || this.isSubmitted) {
      return;
    }
    this.isSubmitted = true;
    const user: User = this.form.getRawValue();

    this.isLoadingCompleted = false;
    this.subscription = this.auth.login(user).subscribe(
      (res) => {
        this.isError = false;
        this.form.reset();
        this.auth.userName$.next(res.firstName);
        this.router.navigate(['/products']);
        this.isSubmitted = false;
        this.isLoadingCompleted = true;
      },
      (error) => {
        this.isSubmitted = false;
        this.isError = true;
        this.errorMessage = error.error.message;
        this.isLoadingCompleted = true;
      }
    )
  }

  private initForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
}
