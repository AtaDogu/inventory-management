import { ToastrService } from 'ngx-toastr';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private productService:ProductService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm(){
    this.productAddForm=this.formBuilder.group({
      title:["",Validators.required],
      summary:["",Validators.required],
      type:["",Validators.required],
      description:["",Validators.required],
      createdAt:["2022-06-29T20:16:54.386Z"],
      updatedAt:["2022-06-29T20:16:54.386Z"]
    })
  }

  add(){
    if(this.productAddForm.valid){
      let productModel=Object.assign({},this.productAddForm.value)
      this.productService.add(productModel).subscribe(response=>{
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
