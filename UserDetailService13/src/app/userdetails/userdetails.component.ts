import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {

  constructor(private userService:UserService){}

  user!: { name: string; job: string; gender: string; country: string; age: number; avatar: string; };

  ngOnInit(): void{
    this.userService.onShowDetailsClicked.subscribe((data: {name:string , job:string , gender:string , country:string , age:number , avatar:string})=> {
      this.user = data;
    })
  }

}
