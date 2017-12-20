import { Component, OnInit,AfterViewInit ,ViewEncapsulation,ViewChild,ComponentFactoryResolver} from '@angular/core';
import {BaseContainerClass} from "../base/baseContainerClass";
import { HostingElementDirective } from "../hosting-element.directive";
import { Helper } from "../base/helper";
@Component({
  selector: '[app-menu]',
  templateUrl: './app-menu.component.html',
  styleUrls:['./app-menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppMenuComponent extends BaseContainerClass {
  @ViewChild(HostingElementDirective) _hostElement: HostingElementDirective;
  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    super(Helper.CreateComponentDict(), componentFactoryResolver,true);
  }
  ngAfterViewInit() {
    this.setContainerRef(this._hostElement);
  }
}
