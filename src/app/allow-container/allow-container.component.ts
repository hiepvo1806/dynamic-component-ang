import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild, AfterViewInit } from '@angular/core';
import { PayLoad } from "../base/baseDropClass";
import { DropComponentComponent } from "../drop-component/drop-component.component"
import { HostingElementDirective } from "../hosting-element.directive";
import { BaseContainerClass } from "../base/baseContainerClass";
import { Helper } from "../base/helper";
@Component({
  selector: 'app-allow-container',
  templateUrl: './allow-container.component.html',
  styleUrls: ['./allow-container.component.css']
})
export class AllowContainerComponent extends BaseContainerClass implements AfterViewInit {
  @ViewChild(HostingElementDirective) _hostElement: HostingElementDirective;

  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    super(Helper.CreateComponentDict(), componentFactoryResolver,true);
  }

  ngAfterViewInit() {
    this.setContainerRef(this._hostElement);
  }
}
