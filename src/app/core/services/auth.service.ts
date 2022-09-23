import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {AuthResponse} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  get token(): string | null {
    return localStorage.getItem('test-token');
  }

  constructor(
    private http: HttpClient
  ) {
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
      localStorage.setItem('test-token', response.token)
    } else {
      localStorage.clear();
    }
  }
}
