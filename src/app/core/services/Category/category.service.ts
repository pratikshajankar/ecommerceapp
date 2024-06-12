import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getallCategory(){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_ALL_CATEGORY);
  }

  createCategory(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.CREATE_CATEGORY,obj);
  }
}
