import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit{

  constructor(private dataService:DataService){}
  inputText : string = "";

  ngOnInit():void{
    /*this.dataService.dataEmitter.subscribe((val)=>{
      this.inputText = val;
    })*/          // this is for dataEmitter

    this.dataService.newEmitter.subscribe((val)=>{       // this is for subject
      this.inputText = val;
    })

  }

}
