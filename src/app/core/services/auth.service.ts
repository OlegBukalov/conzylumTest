import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {AuthResponse, User} from "../models/user.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userName$: BehaviorSubject<string> = new BehaviorSubject<string>('')

  constructor(
    private http: HttpClient
  ) {
  }

  get token(): string | null {
    return localStorage.getItem('test-token');
  }

  public login(user: User): Observable<any> {
    return this.http.post<AuthResponse>(`${environment.serverUrl}/login`, user)
      .pipe(
        tap(this.setToken)
      );
  }

  public logout(): void {
    this.setToken(null);
  }

  public isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(response: AuthResponse | null): void {
    if (response) {
      localStorage.setItem('test-token', response.token);
    } else {
      localStorage.clear();
    }
  }
}
