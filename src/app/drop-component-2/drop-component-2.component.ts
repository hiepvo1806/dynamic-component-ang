import { Component, OnInit } from '@angular/core';
import { PayLoad, BaseDropClass } from '../base/baseDropClass';
@Component({
  selector: 'app-drop-component-2',
  templateUrl: './drop-component-2.component.html',
  styleUrls: ['./drop-component-2.component.css']
})
export class DropComponent2Component extends BaseDropClass implements OnInit {

  constructor() {
    super({
      componentType: "DropComponent2Component",
      cssClass: "cls-4",
      paramsComponent: {
        id: 6
      }
    });
  }

  ngOnInit() {
  }

}
