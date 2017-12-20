import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild, AfterViewInit } from '@angular/core';
import { HostingElementDirective } from "../hosting-element.directive";
import { BaseContainerClass } from "../base/baseContainerClass";
import { Helper } from "../base/helper";
import { SharedService } from "../base/shared.service";
@Component({
  selector: 'app-allow-container',
  templateUrl: './allow-container.component.html',
  styleUrls: ['./allow-container.component.css']
})
export class AllowContainerComponent extends BaseContainerClass {
  @ViewChild(HostingElementDirective) _hostElement: HostingElementDirective;

  constructor(componentFactoryResolver: ComponentFactoryResolver, sharedService: SharedService) {
    super(sharedService, Helper.CreateComponentDict(), componentFactoryResolver, true);

  }

  ngOnInit() {
    this.setContainerInfo({
      staticComponentName: "middle-component",
      hostingElement: this._hostElement
    });
    this._sharedService.reRenderObj.subscribe(r => {
      setTimeout(() => {
        this.reRenderState(r);
      }, 100);
    });
  }
}
