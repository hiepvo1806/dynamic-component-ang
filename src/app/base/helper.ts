import { DropComponentComponent } from "../drop-component/drop-component.component";
import { DropComponent2Component } from "../drop-component-2/drop-component-2.component";
import { DropComponent3Component } from "../drop-component-3/drop-component-3.component";

export class Helper {
    static CreateComponentDict() {
        return {
            "DropComponentComponent": DropComponentComponent,
            "DropComponent2Component": DropComponent2Component,
            "DropComponent3Component": DropComponent3Component
        };
    }
}