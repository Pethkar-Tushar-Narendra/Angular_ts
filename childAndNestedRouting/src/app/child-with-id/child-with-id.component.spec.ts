import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWithIdComponent } from './child-with-id.component';

describe('ChildWithIdComponent', () => {
  let component: ChildWithIdComponent;
  let fixture: ComponentFixture<ChildWithIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildWithIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildWithIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
