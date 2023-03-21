import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private logger:LoggerService) { }

  users = [
    {name:'Shitlesh',status:'active'},
    {name:'Dikshita',status:'active'},
    {name:'Shriya',status:'inactive'}
  ]

  addNewUser(name:string , status:string){
    this.users.push({name: name , status: status})
    this.logger.logMessage(name,status)
  }
}
