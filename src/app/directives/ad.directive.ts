import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[AdAnchor]'
})
export class AdDirective {
  
  // AdDirective injects ViewContainerRef 
  //    to gain access to the view container of the element
  //        that will host the dynamically added component.
  constructor(public viewContainerRef: ViewContainerRef) { }

}
