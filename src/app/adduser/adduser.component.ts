import { NgserviceService } from './../ngservice.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {


  user: User = new User();
  submitted = false;

  constructor(private _service: NgserviceService,
    private router: Router) { }


  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this._service
    .createUser(this.user).subscribe(data => {
      console.log(data);
      console.log("Successfully saved")
      this.user = new User();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/userlist']);
  }
  list(){
    this.router.navigate(['/userlist']);
  }
}





//   user = new User();
//   msg ="";
//   constructor(private _router: Router, private _service: NgserviceService) { }

//   ngOnInit(): void {
//   }

//   addUserFromSubmit(){
//     this._service.addUserFromRemote(this.user).subscribe(
//       data => {
//         this.msg = "added successfully";
//         this._router.navigate(['/userlist']);
//       },
//       error => {console.log("error");

//     }
//     )
//   }
//   gotoList(){
//     this._router.navigate(['/userlist']);

//   }
// }
