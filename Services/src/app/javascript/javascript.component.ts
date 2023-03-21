import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  //providers: [EnrollService]    // DI step 2
})
export class JavascriptComponent {
  title = "JavaScript";

  constructor(private enrollService: EnrollService){}  // DI step 1

  OnEnroll(){
    //const enrollService = new EnrollService();  this is done externally not feseable
   // DI step 3
    this.enrollService.onEnrollClicked(this.title);
  }
}
