import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredEmployeesComponent } from './registered-employees.component';

describe('RegisteredEmployeesComponent', () => {
  let component: RegisteredEmployeesComponent;
  let fixture: ComponentFixture<RegisteredEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisteredEmployeesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
