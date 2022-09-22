import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductItemComponent} from "./product-list/product-item/product-item.component";

const components = [
  ProductListComponent,
  ProductItemComponent
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule
  ]
})
export class FeatureModule {
}
