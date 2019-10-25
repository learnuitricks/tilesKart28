import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  userName:string = '';
  passWord:string = '';

  constructor(private routerService:Router) { }

  login(){

    if(this.userName == ''){
      //alert('user name is required');// call back end api.
      //TileService.validateLoginuser
    }
    else{
      console.log('user has logged in successfully');
      sessionStorage.setItem('user',this.userName);
      this.routerService.navigate(['/tiles']);
    }
    
  }
}
