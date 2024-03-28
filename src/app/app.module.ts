import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductListComponent} from "./product/list/product.list.component";
import {HttpClientModule} from "@angular/common/http";
import { ProductAddComponent } from './product/add/product.add.component';
import { ProductItemComponent } from './product/item/product.item.component';
import { ProductEditComponent } from './product/edit/product.edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from "./pages/home.component";
import { AuthServiceComponent } from './service/auth/auth.service.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductItemComponent,
    ProductEditComponent,
    HomeComponent,
    AuthServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
