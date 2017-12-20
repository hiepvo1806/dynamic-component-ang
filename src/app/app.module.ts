import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import * as $ from 'jquery';
declare let document: any;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AllowContainerComponent } from './allow-container/allow-container.component';
import { DropComponentComponent } from './drop-component/drop-component.component';
import { HostingElementDirective } from './hosting-element.directive';
import { ComponentFactoryComponent } from './component-factory/component-factory.component';
import { PanelModule  ,DropdownModule,ButtonModule} from 'primeng/primeng';
import { DropComponent2Component } from './drop-component-2/drop-component-2.component';
import { DropComponent3Component } from './drop-component-3/drop-component-3.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { SharedService} from "./base/shared.service";
import { enableProdMode } from '@angular/core/src/application_ref';

const appRoutes: Routes = [
  { path: 'dropComponent1', component: DropComponentComponent },
  { path: 'dropComponent2', component: DropComponent2Component },
  { path: 'dropComponent3', component: DropComponent3Component }
];


@NgModule({
  declarations: [
    AppComponent,
    AllowContainerComponent,
    DropComponentComponent,
    HostingElementDirective,
    ComponentFactoryComponent,
    DropComponent2Component,
    DropComponent3Component,
    AppMenuComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    PanelModule ,DropdownModule,ButtonModule
  ],
  entryComponents: [AppMenuComponent,DropComponentComponent,DropComponent2Component,DropComponent3Component],
  providers: [SharedService],
  bootstrap: [AppComponent]
})

export class AppModule { }
