import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpExpBankComponent } from './imp-exp-bank.component';

describe('ImpExpBankComponent', () => {
  let component: ImpExpBankComponent;
  let fixture: ComponentFixture<ImpExpBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpExpBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpExpBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
