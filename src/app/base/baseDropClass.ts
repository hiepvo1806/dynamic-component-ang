import {ViewContainerRef,ViewRef } from '@angular/core';
export class BaseDropClass {
    private _payLoad:PayLoad;
    public index:number;
    public parentRef:ViewContainerRef;
    constructor(payLoad:PayLoad,public viewRef: ViewContainerRef) {
        this._payLoad = payLoad;
    }

    drag(event) {
        event.dataTransfer.setData("text", JSON.stringify(this._payLoad));
        console.log(event);
    }

    destroy() {
        var index = this.parentRef.indexOf(this.viewRef as any);
        if(this.parentRef && index!=-1)
        this.parentRef.remove(index);
        else console.log("null parent_ref or index!");
    }
}


export class PayLoad {
    componentType: string;
    cssClass: string;
    paramsComponent: any;
}