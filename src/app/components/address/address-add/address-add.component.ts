import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address-add',
  templateUrl: './address-add.component.html',
  styleUrls: ['./address-add.component.css']
})
export class AddressAddComponent implements OnInit {

  addressAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private addressService:AddressService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createAddressAddForm();
  }
  createAddressAddForm(){
    this.addressAddForm=this.formBuilder.group({
      userId:["",Validators.required],
      orderId:["",Validators.required],
      firstName:["",Validators.required],
      middleName:["",Validators.required],
      lastName:["",Validators.required],
      mobile:["",Validators.required],
      email:["",Validators.required],
      line1:["",Validators.required],
      line2:[""],
      city:["",Validators.required],
      province:["",Validators.required],
      country:["",Validators.required],
      createdAt:["2022-06-29T20:16:54.386Z"],
      updatedAt:["2022-06-29T20:16:54.386Z"]
    })
  }

  add(){
    if(this.addressAddForm.valid){
      let orderModel=Object.assign({},this.addressAddForm.value)
      this.addressService.add(orderModel).subscribe(response=>{
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
