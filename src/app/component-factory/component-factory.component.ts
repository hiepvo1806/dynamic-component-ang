import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SelectItem } from 'primeng/primeng';
@Component({
  selector: 'app-component-factory',
  templateUrl: './component-factory.component.html',
  styleUrls: ['./component-factory.component.css']
})
export class ComponentFactoryComponent implements OnInit {
  public componentOptions: SelectItem[] = [
    { label: "dropComponent 1", value: "dropComponent1" },
    { label: "dropComponent 2", value: "dropComponent2" },
    { label: "dropComponent 3", value: "dropComponent3" },
  ];

  public classOptions: SelectItem[] = [
    { label: "cls 1", value: "cls-1" },
    { label: "cls 2", value: "cls-2" },
    { label: "cls 3", value: "cls-3" }
  ];

  public choseComponent: string = this.componentOptions[0].value;
  public choseClass: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.generate();
  }

  generate() {
    this.router.navigate([this.choseComponent]);
  }
}
