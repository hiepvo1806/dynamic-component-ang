import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { PayLoad, BaseDropClass } from '../base/baseDropClass';
@Component({
  selector: 'app-drop-component',
  templateUrl: './drop-component.component.html',
  styleUrls: ['./drop-component.component.css']
})
export class DropComponentComponent extends BaseDropClass implements OnInit {
  constructor(public viewContainerRef: ViewContainerRef) {
    super({
      componentType: "DropComponentComponent",
      cssClass: "cls-4",
      paramsComponent: {
        id: 5
      }
    },viewContainerRef);
  }

  ngOnInit() {
  }
}


