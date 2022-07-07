import { Product } from './../../../models/product';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product:Product
  productUpdateForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private productService:ProductService,
    private toastrService:ToastrService) { }

    ngOnInit(): void {
      this.createProductUpdateForm();
    }

    createProductUpdateForm(){
      this.productUpdateForm=this.formBuilder.group({
        title:["",Validators.required],
        summary:["",Validators.required],
        type:["",Validators.required],
        description:["",Validators.required],
        createdAt:["2022-06-29T20:16:54.386Z"],
        updatedAt:["2022-06-29T20:16:54.386Z"]
      })
    }
    update(){if(this.productUpdateForm.valid){
      let productModel=Object.assign({},this.productUpdateForm.value)
      this.productService.update(productModel).subscribe(response=>{
        this.toastrService.success(response.message,"Success")
      },responseError=>{
        if(responseError.error.Errors.length>0){
            for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Validation Exception");
          }

        }
      })

    }else{
      this.toastrService.error("form eksik","Attention")
    }

}



}
