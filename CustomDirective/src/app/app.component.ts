import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomDirective';

  active: boolean = true;



  // for structural directive

  display : boolean = false;   
  
  // for ngSwitch directive
  occupation : string = 'teacher';

  displayNotice(){
    this.display = true;
  }
}
