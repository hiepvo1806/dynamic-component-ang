import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowContainerComponent } from './allow-container.component';

describe('AllowContainerComponent', () => {
  let component: AllowContainerComponent;
  let fixture: ComponentFixture<AllowContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllowContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllowContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
