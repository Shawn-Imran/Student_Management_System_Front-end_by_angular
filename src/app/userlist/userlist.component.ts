import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgserviceService } from '../ngservice.service';
import { User } from '../user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {


  users!: Observable<User[]>;

  constructor(private _service: NgserviceService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.users = this._service.getUserList();
  }

  deleteUser(id: number) {
    this._service.deleteUser(id).subscribe(
        data => {
          console.log(data);
          console.log("Deleted")
          this.reloadData();

        },
        error => console.log(error));
  }

  goToviewUser(id: number){
    this.router.navigate(['/viewuser', id]);
  }

  goToeditUser(id: number){
    this.router.navigate(['/edituser', id]);
  }
  goToaddUser(){
        this.router.navigate(['/adduser']);
      }
}
















//   users!: Observable<User[]>;
//   constructor( private _router: Router, private _service:NgserviceService) { }

//   ngOnInit()  {

//     this.reloadData();

//   }

//   reloadData() {
//     this.users = this._service.getuserList();
//   }

//   deleteUser(id: number) {
//     this._service.deleteuser(id)
//       .subscribe(
//         data => {
//           console.log(data);
//           this.reloadData();
//         },
//         error => console.log(error));
//   }

//   goToviewUser(id: number) {
//     this._router.navigate(['/viewuser', id]);
//   }

//   goToeditUser(id: number) {
//     this._router.navigate(['/edituser', id]);
//   }

//   goToaddUser(){
//     this._router.navigate(['/adduser']);
//   }
// }
