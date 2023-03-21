import { Component } from '@angular/core';
import { LoggerService } from './Services/logger.service';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService ]
})
export class AppComponent {
  title = 'UserService12';

  constructor(private userService:UserService ){}

  user: {name:string , status:string}[] = [];

  ngOnInit(){
    this.user = this.userService.users;
  }
}
