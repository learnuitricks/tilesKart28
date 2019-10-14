import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // create form control and bind it to the html control
  registerForm:FormGroup;
  constructor(private fb: FormBuilder) { 
    this.registerForm = this.fb.group({
      userName: ['kumar'],
      email: ['abc@gmail.com'],
      phoneNumber: [''],
      billingAdress: this.fb.group({
        doorNumber: [''],
        city: [''],
        zip : ['']
      }
      )
    })
  }

  ngOnInit() {
  }

  registerUser(){
    console.log(this.registerForm.value);
    //call rest api with this user ifnromation so user can be register in the system.
  }

}
