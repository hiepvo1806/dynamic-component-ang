export class BaseDropClass {
    private _payLoad:PayLoad;

    constructor(payLoad:PayLoad) {
        this._payLoad = payLoad;
    }

    drag(event) {
        event.dataTransfer.setData("text", JSON.stringify(this._payLoad));
        console.log(event);
    }
}


export class PayLoad {
    componentType: string;
    cssClass: string;
    paramsComponent: any;
}