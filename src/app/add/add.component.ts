import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl , FormGroup ,Validators } from '@angular/forms';
import { DataService } from '../network/data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

   constructor(private fb: FormBuilder, private dService:DataService){}


  // name = ""
  // userName =""
  email = ""
  userBasicDetail = this.fb.group({
    nameForm: ['', Validators.required],
    userName: ['', [Validators.required, Validators.minLength(5),Validators.pattern('[a-zA-Z]+$')]],
    userEmail:['',[ Validators.required, Validators.email]],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  ngOnInit():void{

  }

  get user(){
    return this.userBasicDetail.get('nameForm')
  }


  get userName(){
    return this.userBasicDetail.get('userName')
  }


  get userEmail(){
    return this.userBasicDetail.get('userEmail')
  }


  createUser(){
     console.log(" name :",this.userBasicDetail.get('nameForm')!!.value);
     console.log(" userNaem :",this.userBasicDetail.get('userName')!!.value);
     console.log(" email :",this.userBasicDetail.get('userEmail')!!.value);
     console.log(" Form :",this.userBasicDetail.valid);
     console.log(" Form :",this.userBasicDetail.getRawValue);
     let formObj = this.userBasicDetail.getRawValue(); // {name: '', description: ''}

        let serializedForm = JSON.stringify(formObj);
        console.log("User details are : ",serializedForm)
     this.dService.createUser(serializedForm);
  }

  shouldEnableButton(){
    console.log("evaluationg");
    return false;
  }
}
