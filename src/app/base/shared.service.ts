import { Injectable } from '@angular/core';
import {Subject,Observable} from "rxjs";
@Injectable()
export class SharedService {
  private stateObj = {};
  constructor() { }

  registerNewComponent(staticParent:string,childArr:string[]){
    this.stateObj[staticParent] = childArr;
  }

  printOutStaticState() {
    console.log(this.stateObj);
  }
}
