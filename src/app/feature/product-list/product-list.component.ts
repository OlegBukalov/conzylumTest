import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../core/services/product.service";
import {Product} from "../../core/models/product.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  public products: Product[] = [];
  public isLoadingCompleted = true;
  private subscription: Subscription;

  constructor(private productService: ProductService) {
  }

  public ngOnInit(): void {
    this.initProducts();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public productById(index: number, product: Product): number {
    return product.id;
  }

  private initProducts(): void {
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
