import { Component, OnInit, AfterViewInit, ViewEncapsulation, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { BaseContainerClass } from "../base/baseContainerClass";
import { HostingElementDirective } from "../hosting-element.directive";
import { Helper } from "../base/helper";
import { SharedService } from "../base/shared.service";
@Component({
  selector: '[app-menu]',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppMenuComponent extends BaseContainerClass {
  @ViewChild(HostingElementDirective) _hostElement: HostingElementDirective;
  constructor(sharedService: SharedService, componentFactoryResolver: ComponentFactoryResolver) {
    super(sharedService, Helper.CreateComponentDict(), componentFactoryResolver, true);
  }
  ngAfterViewInit() {
    this.setContainerInfo({
      staticComponentName: "menu-component",
      hostingElement: this._hostElement
    });
    this._sharedService.reRenderObj.subscribe(r => {
      this.reRenderState(r);
    });
  }
}
