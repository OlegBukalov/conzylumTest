import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../core/services/product.service";
import {Observable, Subscription} from "rxjs";
import {Product} from "../../../core/models/product.model";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  product: Product;
  subscription: Subscription;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.getProductById();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getProductById() {
    const id = this.route.snapshot.params['id'];
    this.subscription = this.productService.getProductById(id).subscribe(product => this.product = product);
  }
}
