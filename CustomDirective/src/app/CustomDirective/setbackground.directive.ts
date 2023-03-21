import { Directive, ElementRef,OnInit } from "@angular/core";

@Directive({
    selector: '[setBackground]'
})
export class setBackgroundDirective implements OnInit{
    // private element:ElementRef ;

    // constructor(element: ElementRef){
    //     //element.nativeElement.style.backgroundColor = '#c8e6c9';
    //     this.element = element;
    // }
                                // or

    constructor(private element: ElementRef){
        this.element = element; 
    }                           

    ngOnInit(){
        this.element.nativeElement.style.backgroundColor = '#c8e6c9';
    }

}