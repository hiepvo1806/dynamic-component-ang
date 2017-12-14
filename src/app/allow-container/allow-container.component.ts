import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allow-container',
  templateUrl: './allow-container.component.html',
  styleUrls: ['./allow-container.component.css']
})
export class AllowContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onDrop(ev: any) {
    ev.preventDefault();
    ev.stopPropagation();
    console.log(event)
  }

  allowDrop(ev) {
    ev.preventDefault();
    //console.log(event)
    return false;
  }

  dragenter(ev){
    //ev.preventDefault();
    console.log(event)
  }

  dragleave(ev){
    //ev.preventDefault();
    console.log(event)
  }
}
