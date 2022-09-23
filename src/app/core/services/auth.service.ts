import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable, Subject, tap, throwError} from "rxjs";
import {AuthResponse} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userName$: BehaviorSubject<string> = new BehaviorSubject<string>('')

  constructor(
    private http: HttpClient
  ) {
  }

  get token(): string | null {
    return localStorage.getItem('test-token');
  }

  login(user: any): Observable<any> {
    return this.http.post<AuthResponse>('https://dummyjson.com/auth/login', user)
      .pipe(
        tap(this.setToken)
      );
  }

  logout() {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(response: AuthResponse | null) {
    if (response) {
      localStorage.setItem('test-token', response.token);
    } else {
      localStorage.clear();
    }
  }
}
