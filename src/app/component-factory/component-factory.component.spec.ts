import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFactoryComponent } from './component-factory.component';

describe('ComponentFactoryComponent', () => {
  let component: ComponentFactoryComponent;
  let fixture: ComponentFixture<ComponentFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
