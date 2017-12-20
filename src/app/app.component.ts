import { Component, OnInit,ViewEncapsulation,AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import {SharedService} from "./base/shared.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  {
  constructor(private _sharedService:SharedService) {
  }

  title = 'app';
  
  ngAfterViewInit() {
    this._sharedService.getState();
  }

  toggleMenu(){
    $("#wrapper").toggleClass("toggled");
  }

  showObjState() {
    this._sharedService.printOutStaticState();
  }

  saveObjState() {
    this._sharedService.saveState();
  }

  getObjState() {
    this._sharedService.getState();
  }
}
