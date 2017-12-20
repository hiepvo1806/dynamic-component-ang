import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { PayLoad, BaseDropClass } from '../base/baseDropClass';
@Component({
  selector: 'app-drop-component-3',
  templateUrl: './drop-component-3.component.html',
  styleUrls: ['./drop-component-3.component.css']
})
export class DropComponent3Component extends BaseDropClass implements OnInit {

  constructor(public viewContainerRef: ViewContainerRef) {
    super({
      componentType: "DropComponent3Component",
      cssClass: "cls-4",
      paramsComponent: {
        id: 5
      }
    },viewContainerRef);
  }

  ngOnInit() {
  }

}
