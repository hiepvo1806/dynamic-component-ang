import { Injectable } from '@angular/core';
import {Subject,Observable} from "rxjs";
@Injectable()
export class SharedService {
  private stateObj = {};
  private localStorageKey ="dynamicApp";
  private reRenderSubj: Subject<any> = new Subject<any>();
  public reRenderObj = this.reRenderSubj.asObservable();
  constructor() { }

  registerNewComponent(staticParent:string,childArr:string[]){
    this.stateObj[staticParent] = childArr;
  }

  printOutStaticState() {
    console.log(this.stateObj);
  }

  saveState() {
    localStorage.setItem(this.localStorageKey,JSON.stringify(this.stateObj));
  }

  getState(){
    var txt = localStorage.getItem(this.localStorageKey);
    if(!txt) return {};
    var obj = JSON.parse(txt);
    this.reRenderSubj.next(obj);
  }
}
