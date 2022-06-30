import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product/product-add/product-add.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",pathMatch:"full", component:ProductComponent},
  {path:"products",pathMatch:"full",component:ProductComponent},
  {path:"categories",pathMatch:"full",component:CategoryComponent},
  {path:"products/add",pathMatch:"full",component:ProductAddComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
