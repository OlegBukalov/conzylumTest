import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../core/services/product.service";
import {Observable} from "rxjs";
import {Product} from "../../core/models/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.initProducts();
  }

  private initProducts() {
    this.products$ = this.productService.getAllProducts();
  }
}
