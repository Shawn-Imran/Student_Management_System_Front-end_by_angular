import { NgserviceService } from './../ngservice.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user= new User();
  msg ="";
  constructor( private _service : NgserviceService,private _router : Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {console.log("response received");
              this._router.navigate(['/userlist']);
    }  ,
      error => {console.log("exception occoured");
              this.msg= "Bad creadentials. Please enter valid student id and password";
    }
      )
  };
}

