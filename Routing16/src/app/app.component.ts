import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Routing16';

  constructor(private activatedRoute:ActivatedRoute){}

  ngOnInit() {
    this.activatedRoute.fragment.subscribe((val)=>{
      console.log(val);
      this.jumpTo(val)
    });
  }

  jumpTo(section: any){
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'})
  }

}
