import { Component, OnInit, ViewContainerRef,ElementRef } from '@angular/core';
import { PayLoad, BaseDropClass } from '../base/baseDropClass';
@Component({
  selector: 'app-drop-component-2',
  templateUrl: './drop-component-2.component.html',
  styleUrls: ['./drop-component-2.component.css']
})
export class DropComponent2Component extends BaseDropClass implements OnInit {

  constructor(public viewContainerRef: ViewContainerRef,private elementRef:ElementRef) {
    super({
      componentType: "DropComponent2Component",
      cssClass: "cls-4",
      paramsComponent: {
        id: 6
      }
    },viewContainerRef);
  }

  ngOnInit() {
  }
}
