import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from "../shared/shared.module";
import {HeaderComponent} from "./components/header/header.component";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {NotFoundPageComponent} from "./components/not-found-page/not-found-page.component";
import {RouterModule} from "@angular/router";

const components = [
  HeaderComponent,
  LoginPageComponent,
  NotFoundPageComponent
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    components
  ]
})
export class CoreModule {
}
