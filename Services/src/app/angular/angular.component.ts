import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  //providers:[EnrollService]
})
export class AngularComponent {
  title = "Angular 12"

  constructor(private enrollService: EnrollService){} 

  OnEnroll(){
    //const enrollService = new EnrollService();  This is done externally not feseable
    this.enrollService.onEnrollClicked(this.title);
  }
}
