import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  categoryAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private categoryService:CategoryService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createCategoryAddForm();
  }

  createCategoryAddForm(){
    this.categoryAddForm=this.formBuilder.group({
      parentId:["",Validators.required],
      title:["",Validators.required],
      metaTitle:["",Validators.required],
      slug:["",Validators.required],
      description:["",Validators.required]
    })
  }

  add(){
    if(this.categoryAddForm.valid){
      let orderModel=Object.assign({},this.categoryAddForm.value)
      this.categoryService.add(orderModel).subscribe(response=>{
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
