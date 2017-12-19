import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropComponent2Component } from './drop-component-2.component';

describe('DropComponent2Component', () => {
  let component: DropComponent2Component;
  let fixture: ComponentFixture<DropComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
