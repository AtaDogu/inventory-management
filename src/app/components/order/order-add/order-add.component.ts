import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {

  orderAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private orderService:OrderService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createOrderAddForm();
  }

  createOrderAddForm(){
    this.orderAddForm=this.formBuilder.group({
      userId:["",Validators.required],
      type:["",Validators.required],
      status:["",Validators.required],
      subTotal:["",Validators.required],
      itemDiscount:["",Validators.required],
      tax:["",Validators.required],
      shipping:["",Validators.required],
      total:["",Validators.required],
      promo:["",Validators.required],
      discount:["",Validators.required],
      grandTotal:["",Validators.required],
      description:["",Validators.required],
      createdAt:["2022-06-29T20:16:54.386Z"],
      updatedAt:["2022-06-29T20:16:54.386Z"]
    })
  }

  add(){
    if(this.orderAddForm.valid){
      let orderModel=Object.assign({},this.orderAddForm.value)
      this.orderService.add(orderModel).subscribe(response=>{
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
