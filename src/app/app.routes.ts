import { Routes } from '@angular/router';
import { LoginComponent } from './pages/Admin/login/login.component';
import { NavbarComponent } from './pages/Admin/navbar/navbar.component';
import { ProductsComponent } from './pages/Admin/products/products.component';
import { CategoriesComponent } from './pages/Admin/categories/categories.component';
import { LandingComponent } from './pages/Website/landing/landing.component';
import { CategoryproductComponent } from './pages/Website/categoryproduct/categoryproduct.component';
import { ProductComponent } from './pages/Website/product/product.component';

export const routes: Routes = [
    {
        path:'',redirectTo:'login',pathMatch:'full'
    },
    {
        path:'login',component:LoginComponent
    },
    {
    path:'',component:LandingComponent,
    children:[
        {
            path:'product',component:ProductComponent
          },
          {
            path:'categoryproduct/:id',component:CategoryproductComponent
          },
    ]
    },
    
    {
        path:'',component:NavbarComponent,

        children:[
            {
                path:'products',component:ProductsComponent
            },
            {
                path:'categories',component:CategoriesComponent
            }
        ]
    }
];
