import { OrderService } from './../../services/order.service';
import { Order } from './../../models/order';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: Order[] = [];
  dataLoaded=false;
  filterText="";

  constructor(private orderService: OrderService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private router:Router) {}

  ngOnInit(): void {
    this.getOrders();
  }
  getOrders() {
    this.orderService.getOrders().subscribe((response) => {
      this.orders = response.data;
      this.dataLoaded=true;
    })
  }
  delete(order:Order){
    this.orderService.delete(order).subscribe(response=>{
    this.toastrService.success(response.message,order.description)
    })
  }
  update(order:Order){
    this.toastrService.success("Updated",order.description)
    console.log(order)
  }

}
