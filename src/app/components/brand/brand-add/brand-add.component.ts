import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brandAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private brandService:BrandService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createOrderAddForm();
  }

  createOrderAddForm(){
    this.brandAddForm=this.formBuilder.group({
      title:["",Validators.required],
      summary:["",Validators.required],
      description:["",Validators.required],
      createdAt:["2022-06-29T20:16:54.386Z"],
      updatedAt:["2022-06-29T20:16:54.386Z"]
    })
  }

  add(){
    if(this.brandAddForm.valid){
      let brandModel=Object.assign({},this.brandAddForm.value)
      this.brandService.add(brandModel).subscribe(response=>{
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
