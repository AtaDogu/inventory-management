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
    this.brandService.delete(brand).subscribe(response=>{
    this.toastrService.success(response.message,brand.title)
    })
  }
  update(brand:Brand){
    this.toastrService.success("Updated",brand.title)
    console.log(brand)
  }

}
