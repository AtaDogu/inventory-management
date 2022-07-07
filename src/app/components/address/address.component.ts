import { AddressService } from './../../services/address.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  addresses: Address[] = [];
  dataLoaded = false;
  filterText = '';
  selectedAddress:number;
  constructor(
    private addressService: AddressService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAddresses();
  }
  getAddresses() {
    this.addressService.getAddresses().subscribe((response) => {
      this.addresses = response.data;
      this.dataLoaded = true;
    });
  }
  delete(address: Address) {
    this.addresses=this.addresses.filter(a=>a !== address)
    this.addressService.delete(address).subscribe((response) => {
      this.toastrService.success(
        response.message,
        address.firstName + ' ' + address.lastName
      );
    });
  }
  update(address: Address) {
    this.addressService.delete(address).subscribe((response) => {
      this.toastrService.success(
        response.message,
        address.firstName + ' ' + address.lastName
      );
      console.log(address);
    });
  }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true
    }else{
      return false;
    }
  }
  getSelected(address:Address):boolean{
    return address.id===this.selectedAddress;
  }
}
