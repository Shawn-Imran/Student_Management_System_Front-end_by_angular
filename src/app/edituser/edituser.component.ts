import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  id!: number;
  user: User = new User;

  constructor(private route: ActivatedRoute,private router: Router,
    private _service: NgserviceService) { }

  ngOnInit() {
    this.user = new User();

    this.id = this.route.snapshot.params['id'];

    this._service.getUser(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }

  updateUser() {
    this._service.updateUser(this.id, this.user)
      .subscribe(data => {
        console.log(data);
        this.user = new User();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateUser();
  }

  gotoList() {
    this.router.navigate(['/userlist']);
  }
  list(){
    this.router.navigate(['/userlist']);
  }
}
















// function subscribe(arg0: (data: any) => void, arg1: (error: any) => void) {
//   throw new Error('Function not implemented.');
// }
// //   editUserFromSubmit(){
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
