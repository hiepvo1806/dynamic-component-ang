import { Directive,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHostingElement]'
})
export class HostingElementDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
