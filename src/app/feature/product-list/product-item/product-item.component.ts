import {Component, Input} from '@angular/core';
import {Product} from "../../../core/models/product.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product: Product;

  constructor(
    private router: Router
  ) {
  }

  public onOpenDetails(): void {
    this.router.navigate(['/products', this.product.id]);
  }
}
