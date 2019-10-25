import { Directive,ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMaxValue]'
})
export class MaxValueDirective {

@HostListener('change') onValueChange(){
  this.elementValue = + this.el.nativeElement.value;
  if(this.directiveValue  <this.elementValue){
    // console.error(`directive value ${this.directiveValue} is greater than element value ${this.elementValue}`)
    let divNode = this.renderer.createElement('div');
    let errorText = this.renderer.createText('value is more');
    this.renderer.appendChild(divNode,errorText);
    this.renderer.addClass(divNode,'alert');
    this.renderer.addClass(divNode,'alert-danger');
    this.renderer.appendChild(this.el.nativeElement.parentElement,divNode);
  }
  
}

  directiveValue: number =0;
  elementValue:number = 0;
  constructor(private el:ElementRef,private renderer:Renderer2) { 
    this.directiveValue = +this.el.nativeElement.attributes["appMaxValue"].value;
    console.log(this.el.nativeElement);
  }

}
