import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  apiUrl = 'https://localhost:7050/api/';
  constructor(private httpClient: HttpClient) {}

  getItems(): Observable<ListResponseModel<Item>> {
    return this.httpClient.get<ListResponseModel<Item>>(
      this.apiUrl + 'items/getall'
    );
  }

  add(item:Item):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"items/add",item)
  }

  delete(item:Item):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"items/delete",item)
  }
}
