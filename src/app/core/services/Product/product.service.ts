import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProduct(){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_ALL_PRODUCT);
  }

  createProduct(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.CREATE_PRODUCT,obj);
  }

  updateProduct(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.UPDATE_PRODUCT,obj);
  }

  deleteProduct(id:any){
    return this.http.get(APIConstant.API_URL+APIConstant.DELETE_PRODUCT_BY_ID+id);
  }

  getProductbyId(id:any){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_PRODUCT_BY_ID+id);
  }
}
