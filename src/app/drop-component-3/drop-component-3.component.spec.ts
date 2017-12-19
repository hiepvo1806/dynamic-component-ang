import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropComponent3Component } from './drop-component-3.component';

describe('DropComponent3Component', () => {
  let component: DropComponent3Component;
  let fixture: ComponentFixture<DropComponent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropComponent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
