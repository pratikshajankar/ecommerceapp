import { Component, OnInit } from '@angular/core';
import { Login } from '../../../core/models/Classes/login';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../../core/services/Login/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginObj:Login=new Login();

  constructor(private http:HttpClient,private loginsrv:LoginService){

  }


  ngOnInit(): void {
  
  }



  
}
