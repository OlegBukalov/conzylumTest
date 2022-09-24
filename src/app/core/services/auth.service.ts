import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {AuthResponse, User} from "../models/user.model";
import {environment} from "../../../environments/environment";

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

  login(user: User): Observable<any> {
    return this.http.post<AuthResponse>(`${environment.serverUrl}/login`, user)
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
