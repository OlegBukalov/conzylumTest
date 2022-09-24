import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductItemComponent} from "./product-list/product-item/product-item.component";
import {RouterModule, Routes} from "@angular/router";

const components = [
  ProductListComponent,
  ProductItemComponent
]

const routes: Routes = [
  {path: '', component: ProductListComponent}
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FeatureModule {
}
