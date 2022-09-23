import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./feature/product-list/product-list.component";
import {LoginPageComponent} from "./core/components/login-page/login-page.component";
import {NotFoundPageComponent} from "./core/components/not-found-page/not-found-page.component";
import {AuthGuard} from "./core/services/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'products', component: ProductListComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginPageComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
