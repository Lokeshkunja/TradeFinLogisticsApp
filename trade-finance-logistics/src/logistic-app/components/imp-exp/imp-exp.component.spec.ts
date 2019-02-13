import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpExpComponent } from './imp-exp.component';

describe('ImpExpComponent', () => {
  let component: ImpExpComponent;
  let fixture: ComponentFixture<ImpExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
