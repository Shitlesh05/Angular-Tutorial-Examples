import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private dataService:DataService){}

  enteredText : string = "";

  ngOnInit():void{
    
  }

  onBtnClick(){
    //console.log(this.enteredText);
    this.dataService.raiseDataEmitterEvent(this.enteredText);
  }
}
