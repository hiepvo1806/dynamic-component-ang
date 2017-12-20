import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
import {SharedService} from "./base/shared.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(private _sharedService:SharedService) {
  }

  title = 'app';
  toggleMenu(){
    $("#wrapper").toggleClass("toggled");
  }

  showObjState() {
    this._sharedService.printOutStaticState();
  }
}
