import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import * as $ from 'jquery';
import { AllowContainerComponent } from './allow-container/allow-container.component';
import { DropComponentComponent } from './drop-component/drop-component.component';
declare let document: any;
@NgModule({
  declarations: [
    AppComponent,
    AllowContainerComponent,
    DropComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
