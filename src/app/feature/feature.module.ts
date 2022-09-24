import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductItemComponent} from "./product-list/product-item/product-item.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {ProductDetailComponent} from './product-list/product-detail/product-detail.component';

const components = [
  ProductListComponent,
  ProductItemComponent
]

const routes: Routes = [
  {path: '', component: ProductListComponent},
]

@NgModule({
  declarations: [
    components,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [
    RouterModule
  ]
})
export class FeatureModule {
}
