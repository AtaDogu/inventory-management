import { SingleResponseModel } from './../../models/singleResponseModel';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded=false;
  filterText="";
  selectedProduct:number;
  selected:Product;

  constructor(private productService: ProductService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private router:Router) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded=true;
    })
  }
  deleteProduct(product:Product){
    this.products=this.products.filter(p=>p !== product)
    this.productService.delete(product).subscribe((response)=>{
      this.toastrService.success(response.message,product.title)
    }
    )
  }
  update(product:Product){
    this.selected===product
    console.log(product)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true
    }else{
      return false;
    }
  }
  getSelected(product:Product):boolean{
    return product.id===this.selectedProduct;
  }


}
