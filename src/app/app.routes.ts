import { Routes } from '@angular/router';
import { LoginComponent } from './pages/Admin/login/login.component';
import { NavbarComponent } from './pages/Admin/navbar/navbar.component';
import { ProductsComponent } from './pages/Admin/products/products.component';

export const routes: Routes = [
    {
        path:'',redirectTo:'login',pathMatch:'full'
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'',component:NavbarComponent,

        children:[
            {
                path:'product',component:ProductsComponent
            }
        ]
    }
];
