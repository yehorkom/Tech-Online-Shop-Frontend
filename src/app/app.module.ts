import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductListComponent} from "./product/list/product.list.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ProductAddComponent } from './product/add/product.add.component';
import { ProductItemComponent } from './product/item/product.item.component';
import { ProductEditComponent } from './product/edit/product.edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {HomeComponent} from "./pages/home.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductItemComponent,
    ProductEditComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: "ua"
    })
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
