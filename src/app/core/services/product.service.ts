import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map, Observable} from "rxjs";
import {Product, ProductResponse} from "../models/product.model";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<ProductResponse>(`${environment.serverUrl}/products`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.auth.token}`
      })
    })
      .pipe(
        map((resp: ProductResponse) => resp.products)
      )
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.serverUrl}/products/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.auth.token}`
      })
    })
  }
}
