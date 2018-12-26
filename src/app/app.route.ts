import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { Code404Component } from './code404/code404.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';

const routeConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "product/:productId", component: ProductDetailComponent },
  { path: "xx", component: Code404Component }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routeConfig),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Components = [HomeComponent, ProductDetailComponent, Code404Component];
