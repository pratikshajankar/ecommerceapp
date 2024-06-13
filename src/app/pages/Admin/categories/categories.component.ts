import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../core/services/Category/category.service';
import { ICategory } from '../../../core/models/Interfaces/ICategory';
import { Category } from '../../../core/models/Classes/Category';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{

  ShowSideDiv:boolean=false;

  categoryList:ICategory[]=[];
  categoryobj:Category=new Category();

  constructor(private http:HttpClient,private categorysrv:CategoryService){}


  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory(){
    this.categorysrv.getallCategory().subscribe((res:any)=>{
this.categoryList=res.data;
    })
  }

  CreateCategory(){
    this.categorysrv.createCategory(this.categoryobj).subscribe((res:any)=>{
      if(res.result){
        alert("category created");
        this.getAllCategory();
      }
      else{
        alert(res.message);
      }
    })
  }

  onReset(){
    this.categoryobj=new Category();
  }

  showsidediv(){
    this.ShowSideDiv=true;
  }

  hidesidediv(){
    this.ShowSideDiv=false;
  }

}
