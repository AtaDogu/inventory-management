import { Category } from './../models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl='https://localhost:7050/api/';
  constructor(private httpClient:HttpClient) { }


  getCategories():Observable<ListResponseModel<Category>>{
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl+"categories/getall");
  }

  add(category:Category):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"categories/add",category)
  }

  delete(category:Category):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"categories/delete",category)
  }
}
