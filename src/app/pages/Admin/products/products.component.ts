import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../core/services/Product/product.service';
import { IProduct } from '../../../core/models/Interfaces/IProduct';
import { Product } from '../../../core/models/Classes/Product';
import { ICategory } from '../../../core/models/Interfaces/ICategory';
import { CategoryService } from '../../../core/services/Category/category.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  savebtn:boolean=false;
  updatebtn:boolean=false;

  isSideDivVisible:boolean=false;

  categoryList:ICategory[]=[];

Productobj:Product=new Product();
productList:IProduct[]=[];

  constructor(private http:HttpClient,private productsrv:ProductService,private categorysrv:CategoryService){}

  ngOnInit(): void {
    this.getAllCategory();
    this.getAllProduct();
  }

  getAllCategory(){
this.categorysrv.getallCategory().subscribe((res:any)=>{
  this.categoryList=res.data;
})
  }

  getAllProduct(){
    this.productsrv.getAllProduct().subscribe((res:any)=>{
      this.productList=res.data;
    })
  }

  onSave(){
this.productsrv.createProduct(this.Productobj).subscribe((res:any)=>{
  if(res.result){
    alert("product added successfully");
    this.getAllProduct();
  }
  else{
    alert(res.message);
  }
})
  }

  onEdit(id:any){
    this.Productobj=id;
  }

  onDelete(id:any){
    this.productsrv.deleteProduct(id.productId).subscribe((res:any)=>{
      if(res.result){
        alert("product deleted succeessfully");
        this.getAllProduct();
      }
      else{
        alert(res.message);
      }
    })
  }

onUpdate(){
this.productsrv.updateProduct(this.Productobj).subscribe((res:any)=>{
if(res.result){
  alert("product updated successfully");
  this.getAllProduct();
}else{
  alert(res.message);
}
})
}

onreset(){
this.Productobj=new  Product();
}

showsavebtn(){
  this.savebtn=true;
  this.updatebtn=false;
}

showupdatebtn(){
  this.savebtn=false;
  this.updatebtn=true;
}

  open(){
    this.isSideDivVisible=true;
  }

  close(){
    this.isSideDivVisible=false;
  }

}
