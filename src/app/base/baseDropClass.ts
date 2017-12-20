import { ViewContainerRef, ViewRef } from '@angular/core';
import { Observable, Subject } from "rxjs";
import {RemoveComponentPayload} from "./removeComponentPayLoad";
export class BaseDropClass {
    public deleteSj: Subject<RemoveComponentPayload> = new Subject<RemoveComponentPayload>();
    public deleteObs: Observable<RemoveComponentPayload> = this.deleteSj.asObservable();
    private _payLoad: PayLoad;
    public index: number;
    public parentRef: ViewContainerRef;
    constructor(payLoad: PayLoad, public viewRef: ViewContainerRef) {
        this._payLoad = payLoad;
    }

    drag(event) {
        event.dataTransfer.setData("text", JSON.stringify(this._payLoad));
        //console.log(event);
    }

    destroy() {
        var index = this.parentRef.indexOf(this.viewRef as any);
        if (this.parentRef && index != -1) { 
            this.parentRef.remove(index); 
            //this.deleteSj.next("index:" + index + "&payLoad=" + this._payLoad.componentType); 
            this.deleteSj.next({
                index: index,
                componentType: this._payLoad.componentType
            });
        }
        else console.log("null parent_ref or index!");
    }
}


export class PayLoad {
    componentType: string;
    cssClass: string;
    paramsComponent: any;
}