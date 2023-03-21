import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit{

  constructor(private element: ElementRef ,private renderer: Renderer2) { }


  @Input() defaultColor: string = 'transparent';
  @Input('appBetterhighlight') highlightColor: string = 'pink';
  @Input() title: string = 'This is title';

  @HostBinding('style.backgroundColor') background: string = this.defaultColor;
  @HostBinding('style.border') border: string = 'none';

  ngOnInit(){
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter') onmouseover(){
    this.background = this.highlightColor;
    this.border = 'blue 2px solid';
   }

   @HostListener('mouseleave') onmouseout(){
    this.background = this.defaultColor;
    this.border = 'none';
   }
}
