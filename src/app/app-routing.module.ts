import { CoverComponent } from './components/cover/cover.component';
import { BrandComponent } from './components/brand/brand.component';
import { OrderComponent } from './components/order/order.component';
import { ItemComponent } from './components/item/item.component';
import { AddressComponent } from './components/address/address.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product/product-add/product-add.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CoverComponent},
  {path:"products",pathMatch:"full",component:ProductComponent},
  {path:"categories",pathMatch:"full",component:CategoryComponent},
  {path:"products/add", component:ProductAddComponent,canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"addresses",component:AddressComponent},
  {path:"items",component:ItemComponent},
  {path:"orders",component:OrderComponent},
  {path:"brands",component:BrandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
