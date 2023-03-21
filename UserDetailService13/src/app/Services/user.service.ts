import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users = [
    {name:'Shitlesh',job:'UI developer',gender:'male',country:'India',age:28,avatar:'assets/avatar/shitlesh.jpg'},
    {name:'Dikshita',job:'Engineer',gender:'female',country:'India',age:29,avatar:'assets/avatar/dikshita.jpg'},
    {name:'Kanchan',job:'Engineer',gender:'female',country:'India',age:25,avatar:'assets/avatar/kanchan.jpg'},
    {name:'Arundhati',job:'Tester',gender:'female',country:'India',age:26,avatar:'assets/avatar/arundhati.jpg'}
  ]

  onShowDetailsClicked = new EventEmitter<{name:string , job:string , gender:string , country:string , age:number , avatar:string}>()

  showUserDetails(user: {name:string , job:string , gender:string , country:string , age:number , avatar:string}){
    this.onShowDetailsClicked.emit(user);
  }
}
