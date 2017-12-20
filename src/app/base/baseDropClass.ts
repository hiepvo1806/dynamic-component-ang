import {ViewContainerRef } from '@angular/core';
export class BaseDropClass {
    private _payLoad:PayLoad;
    public index:number;
    public parentRef:ViewContainerRef;
    constructor(payLoad:PayLoad) {
        this._payLoad = payLoad;
    }

    drag(event) {
        event.dataTransfer.setData("text", JSON.stringify(this._payLoad));
        console.log(event);
    }

    destroy() {
        if(this.parentRef && this.index)
        this.parentRef.remove(this.index);
        else console.log("null parent_ref or index!");
    }
}


export class PayLoad {
    componentType: string;
    cssClass: string;
    paramsComponent: any;
}