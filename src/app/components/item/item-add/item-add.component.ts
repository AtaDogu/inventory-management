import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {

  itemAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private itemService:ItemService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createitemAddForm();
  }

  createitemAddForm(){
    this.itemAddForm=this.formBuilder.group({
      productId:["",Validators.required],
      brandId:["",Validators.required],
      supplierId:["",Validators.required],
      orderId:["",Validators.required],
      sku:[""],
      mrp:["",Validators.required],
      discount:["",Validators.required],
      price:["",Validators.required],
      quantity:["",Validators.required],
      sold:["",Validators.required],
      available:["",Validators.required],
      defective:["",Validators.required],
      createdBy:["",Validators.required],
      updatedBy:["",Validators.required],
      createdAt:["2022-06-29T20:16:54.386Z"],
      updatedAt:["2022-06-29T20:16:54.386Z"]
    })
  }

  add(){
    if(this.itemAddForm.valid){
      let orderModel=Object.assign({},this.itemAddForm.value)
      this.itemService.add(orderModel).subscribe(response=>{
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
