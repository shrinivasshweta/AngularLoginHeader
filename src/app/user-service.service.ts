import { Injectable } from '@angular/core';
import {UserComponent} from '../app/user/user.component';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  user:User=new User();
  // http:HttpClient;
  
  constructor(private http: HttpClient) { }


  getUser(user): Observable<User>{
    this.user=user;
    console.log(user);
    return this.http.post<User>('http://localhost:8082/api/v1/user',user);
    // obs.subscribe((response)=>console.log(response));
  }

  
}
