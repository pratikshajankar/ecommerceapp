import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  getCartItem(){
return this.http.get(APIConstant.API_URL+APIConstant.GET_ALL_CART_ITEM);
  }

  addToCart(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.ADD_TO_CART,obj);
  }
}
