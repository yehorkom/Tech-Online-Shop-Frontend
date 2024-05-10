import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductAddComponent} from "./product/add/product.add.component";
import {ProductListComponent} from "./product/list/product.list.component";
import {HomeComponent} from "./pages/home.component";

// import {canActivate} from "./service/auth/can.activate";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'add-product', component: ProductAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
