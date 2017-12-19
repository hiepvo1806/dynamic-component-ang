import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { PayLoad } from "../base/baseDropClass";
import { DropComponentComponent } from "../drop-component/drop-component.component"
import { HostingElementDirective } from "../hosting-element.directive";
@Component({
  selector: 'app-allow-container',
  templateUrl: './allow-container.component.html',
  styleUrls: ['./allow-container.component.css']
})
export class AllowContainerComponent implements OnInit {
  @ViewChild(HostingElementDirective) hostElement: HostingElementDirective;
  private componentDict = {};

  constructor(private componentFactoryResolver: ComponentFactoryResolver, public viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.componentDict = {
      "DropComponentComponent": DropComponentComponent
    };
  }

  onDrop(ev: any) {
    ev.preventDefault();
    ev.stopPropagation();
    var dataStr = ev.dataTransfer.getData("text");
    var data = JSON.parse(dataStr) as PayLoad;
    this.loadComponent(data);
    console.log(data);
  }

  allowDrop(ev) {
    ev.preventDefault();
    //console.log(event)
    return false;
  }

  dragenter(ev) {
    //ev.preventDefault();
    console.log(event)
  }

  dragleave(ev) {
    //ev.preventDefault();
    console.log(event)
  }

  loadComponent(payload: PayLoad) {
    let foundComponent = this.componentDict[payload.componentType];
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(foundComponent);
    let viewContainerRef = this.hostElement.viewContainerRef;
    //viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    //(<AdComponent>componentRef.instance).data = adItem.data;
  }
}
