import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IProduct } from '../../../core/models/Interfaces/IProduct';
import { ICategory } from '../../../core/models/Interfaces/ICategory';
import { ProductService } from '../../../core/services/Product/product.service';
import { CategoryService } from '../../../core/services/Category/category.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  productList:IProduct[]=[];
  categoryList:ICategory[]=[];

  constructor(private productsrv:ProductService,private categorysrv:CategoryService,private router:Router){}

  ngOnInit(): void {
    this.getAllProduct();
    this.getAllCategory();
  }

  getAllProduct(){
    this.productsrv.getAllProduct().subscribe((res:any)=>{
this.productList=res.data;
    })
  }

  getAllCategory(){
    this.categorysrv.getallCategory().subscribe((res:any)=>{
this.categoryList=res.data;
    })
  }

 

}
