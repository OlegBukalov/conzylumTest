import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from "./core/core.module";
import {AppComponent} from './app.component';
import {FeatureModule} from "./feature/feature.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    FeatureModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
