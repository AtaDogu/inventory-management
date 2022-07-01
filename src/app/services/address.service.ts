import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../models/address';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  apiUrl = 'https://localhost:7050/api/';
  constructor(private httpClient: HttpClient) {}

  getAddresses(): Observable<ListResponseModel<Address>> {
    return this.httpClient.get<ListResponseModel<Address>>(
      this.apiUrl + 'addresses/getall'
    );
  }

  add(address:Address):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"addresses/add",address)
  }

  delete(address:Address):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"addresses/delete",address)
  }
}
