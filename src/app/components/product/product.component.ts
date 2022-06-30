import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private productService: ProductService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService) {}

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
    this.productService.delete(product).subscribe(response=>{
    this.toastrService.success(response.message,product.title)
    console.log(product)
    })
  }
  updateProduct(product:Product){
    this.toastrService.success("Updated",product.title)
    console.log(product)
  }
}
