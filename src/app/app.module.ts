import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import * as $ from 'jquery';
import { AllowContainerComponent } from './allow-container/allow-container.component';
import { DropComponentComponent } from './drop-component/drop-component.component';
import { HostingElementDirective } from './hosting-element.directive';
declare let document: any;
@NgModule({
  declarations: [
    AppComponent,
    AllowContainerComponent,
    DropComponentComponent,
    HostingElementDirective
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [DropComponentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
