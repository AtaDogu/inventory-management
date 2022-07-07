import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductComponent } from './components/product/product.component';
import { ProductAddComponent } from './components/product/product-add/product-add.component';
import { CategoryComponent } from './components/category/category.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { RegisterComponent } from './components/register/register.component';
import { ItemComponent } from './components/item/item.component';
import { AddressComponent } from './components/address/address.component';
import { BrandComponent } from './components/brand/brand.component';
import { CoverComponent } from './components/cover/cover.component';
import { OrderAddComponent } from './components/order/order-add/order-add.component';
import { AddressAddComponent } from './components/address/address-add/address-add.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { CategoryAddComponent } from './components/category/category-add/category-add.component';
import { ItemAddComponent } from './components/item/item-add/item-add.component';
import { FilterOrderPipePipe } from './pipes/filter-order-pipe.pipe';
import { FilterCategoryPipePipe } from './pipes/filter-category-pipe.pipe';
import { FilterAddressPipePipe } from './pipes/filter-address-pipe.pipe';
import { FilterBrandPipePipe } from './pipes/filter-brand-pipe.pipe';
import { FilterItemPipePipe } from './pipes/filter-item-pipe.pipe';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ProductComponent,
    ProductAddComponent,
    CategoryComponent,
    VatAddedPipe,
    FilterPipePipe,
    LoginComponent,
    OrderComponent,
    RegisterComponent,
    ItemComponent,
    AddressComponent,
    BrandComponent,
    CoverComponent,
    OrderAddComponent,
    AddressAddComponent,
    BrandAddComponent,
    CategoryAddComponent,
    ItemAddComponent,
    FilterOrderPipePipe,
    FilterCategoryPipePipe,
    FilterAddressPipePipe,
    FilterBrandPipePipe,
    FilterItemPipePipe,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
