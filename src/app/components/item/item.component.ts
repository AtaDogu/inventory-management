import { Item } from './../../models/item';
import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items: Item[] = [];
  dataLoaded=false;
  filterText="";
  selectedItem:number;

  constructor(private itemService: ItemService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private router:Router) {}

  ngOnInit(): void {
    this.getItems();
  }
  getItems() {
    this.itemService.getItems().subscribe((response) => {
      this.items = response.data;
      this.dataLoaded=true;
    })
  }
  delete(item:Item){
    this.items=this.items.filter(i=>i !== item)
    this.itemService.delete(item).subscribe(response=>{
    this.toastrService.success(response.message,item.sku)
    })
  }
  update(item:Item){
    this.toastrService.success("Updated",item.sku)
    console.log(item)
  }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true
    }else{
      return false;
    }
  }
  getSelected(item:Item):boolean{
    return item.id===this.selectedItem;
  }

}
