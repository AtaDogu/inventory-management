import { BrandService } from './../../services/brand.service';
import { Brand } from './../../models/brand';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands: Brand[] = [];
  dataLoaded=false;
  filterText="";
  selectedBrand:number;

  constructor(private brandService: BrandService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private router:Router) {}

  ngOnInit(): void {
    this.getBrands();
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded=true;
    })
  }
  delete(brand:Brand){
    this.brands=this.brands.filter(b=>b !== brand)
    this.brandService.delete(brand).subscribe(response=>{
    this.toastrService.success(response.message,brand.title)
    })
  }
  update(brand:Brand){
    this.toastrService.success("Updated",brand.title)
    console.log(brand)
  }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true
    }else{
      return false;
    }
  }
  getSelected(brand:Brand):boolean{
    return brand.id===this.selectedBrand;
  }

}
