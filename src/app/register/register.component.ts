import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user= new User();
  msg ="";
  constructor( private _service : NgserviceService,private _router : Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data => {console.log("response received");
              this.msg= "Successfull";
              this._router.navigate(['/login']);
    }  ,
      error => {console.log("exception occoured");
              this.msg= "Please enter valid info";
    }
      )
  };
}
