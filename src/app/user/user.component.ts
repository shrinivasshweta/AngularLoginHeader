import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserServiceService} from '../user-service.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User=new User();
  constructor(private userService:UserServiceService,private http:HttpClient) {
  
   }

  // ngAfterContentInit() {
  //   console.log("hi");
  //   this.userService.getUser(this.user);
  // }
  getUser(user)
  {
    this.user.userId=user.userId;
    this.user.userName=user.userName;
    this.user.userMobile=user.userMobile;
    this.user.userPassword=user.userPassword;
    console.log(this.user);
    this.postUser(this.user);
  }
  postUser(user){
    this.userService.getUser(this.user).subscribe(data => console.log(data)); 
  }
  ngOnInit(){
  
  }


}
