import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductAddComponent} from "./product/add/product.add.component";
import {ProductListComponent} from "./product/list/product.list.component";
import {HomeComponent} from "./pages/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent }, // Перенаправление с главной страницы на список товаров
  { path: 'products', component: ProductListComponent }, // Маршрут для списка товаров
  { path: 'add-product', component: ProductAddComponent }, // Маршрут для добавления товара
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
