import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  username : string = '';
  status : string = 'active'

  constructor(private userService: UserService){}

  addUser(){
    this.userService.addNewUser(this.username , this.status);
    //console.log(this.userService.users);
  }
}
