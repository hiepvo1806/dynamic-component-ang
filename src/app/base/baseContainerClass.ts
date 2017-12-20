import { PayLoad, BaseDropClass } from "../base/baseDropClass";
import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { RemoveComponentPayload } from "./removeComponentPayLoad";
import { SharedService } from "./shared.service";
export class BaseContainerClass {

    private componentDict = {};
    private hostElement: any;
    private componentArr = [];
    private staticComponentName = "";
    constructor(public _sharedService: SharedService, componentDict: any, private componentFactoryResolver: ComponentFactoryResolver, private isDuplicateAllow: boolean) {
        this.componentDict = componentDict;
    }

    setContainerInfo(info: ContainerInfo) {
        this.hostElement = info.hostingElement;
        this.staticComponentName = info.staticComponentName;
    }

    reRenderState(r: any) {
        if (r[this.staticComponentName]) {
            var compArr = r[this.staticComponentName];
            compArr.forEach(element => {
                this.loadComponent({
                    componentType: element,
                    cssClass: "",
                    paramsComponent: null
                },this.isDuplicateAllow);
            });
        } 
    }

    onDrop(ev: any) {
        ev.preventDefault();
        ev.stopPropagation();
        var dataStr = ev.dataTransfer.getData("text");
        var data = JSON.parse(dataStr) as PayLoad;
        this.loadComponent(data, this.isDuplicateAllow);
    }

    trackingRemove(removePayload: RemoveComponentPayload) {
        this.componentArr.splice(removePayload.index, 1);
        console.log(this.componentArr);
        this._sharedService.registerNewComponent(this.staticComponentName, this.componentArr);
    }

    loadComponent(payload: PayLoad, isDuplicateAllow: boolean = false) {
        let foundComponent = this.componentDict[payload.componentType];
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(foundComponent);
        let viewContainerRef = this.hostElement.viewContainerRef;
        if (!isDuplicateAllow) viewContainerRef.clear();
        let componentRef = viewContainerRef.createComponent(componentFactory);
        this.componentArr.push(payload.componentType);
        this._sharedService.registerNewComponent(this.staticComponentName, this.componentArr);
        var trueTypeComponent = componentRef._component as BaseDropClass;
        trueTypeComponent.index = this.componentArr.length;
        trueTypeComponent.parentRef = viewContainerRef;
        trueTypeComponent.deleteObs.subscribe(r => this.trackingRemove(r));
        //(<AdComponent>componentRef.instance).data = adItem.data;
    }

    allowDrop(ev) {
        ev.preventDefault();
        return false;
    }

    dragenter(ev) {
        //ev.preventDefault();
        //console.log(event)
    }

    dragleave(ev) {
        //ev.preventDefault();
        //console.log(event)
    }
}

export class ContainerInfo {
    hostingElement: any;
    staticComponentName: string;
}