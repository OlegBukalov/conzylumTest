import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../core/services/product.service";
import {Product} from "../../core/models/product.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  isLoadingCompleted = true;
  subscription: Subscription;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.initProducts();
  }

  private initProducts() {
    this.isLoadingCompleted = false;
    this.subscription = this.productService.getAllProducts().subscribe(
      products => {
        this.products = products;
        this.isLoadingCompleted = true;
      },
      () => {
        this.isLoadingCompleted = true;
      }
    );
  }
}
