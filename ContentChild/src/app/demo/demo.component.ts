import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit,AfterContentInit{
  
  ngOnInit(): void{
    console.log(this.paragraphEL);
  }

  @ContentChild('paragraph')
  paragraphEL!: ElementRef;

  ngAfterContentInit()
  {
    this.paragraphEL.nativeElement.textContent = 'This is new Paragraph'
    console.log(this.paragraphEL.nativeElement.textContent);
  }
}
