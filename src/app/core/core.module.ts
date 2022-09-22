import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {NotFoundPageComponent} from "./components/not-found-page/not-found-page.component";
import {MaterialModule} from "../material/material.module";

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
    MaterialModule
  ],
  exports: [
    components
  ]
})
export class CoreModule {
}
