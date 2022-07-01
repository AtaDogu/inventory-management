import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Order } from '../models/order';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl = 'https://localhost:7050/api/';
  constructor(private httpClient: HttpClient) {}

  getOrders(): Observable<ListResponseModel<Order>> {
    return this.httpClient.get<ListResponseModel<Order>>(
      this.apiUrl + 'orders/getall'
    );
  }

  add(order:Order):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"orders/add",order)
  }

  delete(order:Order):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"orders/delete",order)
  }
}
