import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/Product/product.service';
import { IProduct } from '../../../core/models/Interfaces/IProduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../../core/services/Category/category.service';
import { ICategory } from '../../../core/models/Interfaces/ICategory';
import { Route, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit{

  categoryList:ICategory[]=[];

  constructor(private categorysrv:CategoryService,private router:Router){}

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory(){
    this.categorysrv.getallCategory().subscribe((res:any)=>{
this.categoryList=res.data;
    })
  }

  navigatetoproduct(id:number){
    this.router.navigate(['/categoryproduct',id])
      }
  
}


