import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../../core/models/Interfaces/IProduct';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../core/services/Product/product.service';

@Component({
  selector: 'app-categoryproduct',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './categoryproduct.component.html',
  styleUrl: './categoryproduct.component.css'
})
export class CategoryproductComponent {

  activateCategoryId:number=0;
  productList:IProduct[]=[];

  constructor(private activatedRoute:ActivatedRoute,private productsrv:ProductService){
    this.activatedRoute.params.subscribe((res:any)=>{
      this.activateCategoryId=res.id;
      this.getProducts();

    })
  }

  getProducts(){
    this.productsrv.getProductByCatId(this.activateCategoryId).subscribe((res:any)=>{
      this.productList=res.data;
    })
  }

}
