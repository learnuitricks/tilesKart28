import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  userName:string = '';

  constructor() { }

  validateLogin(){

    if(this.userName == ''){
      alert('user name is required');
    }
    else{
      console.log('user has logged in successfully');
    }
    
  }
}
