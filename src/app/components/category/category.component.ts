import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:Category[]=[];
  dataLoaded=false;
  filterText="";
  constructor(private categoryService:CategoryService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
      this.dataLoaded=true;
    })
  }

  delete(category:Category){
    this.categoryService.delete(category).subscribe(response=>{
    this.toastrService.success(response.message,category.title)
    })
  }
  update(category:Category){
    this.toastrService.success("Updated",category.title)
    console.log(category)
  }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true
    }else{
      return false;
    }
  }

}
