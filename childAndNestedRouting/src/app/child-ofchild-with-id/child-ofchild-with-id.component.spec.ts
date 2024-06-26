import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOfchildWithIdComponent } from './child-ofchild-with-id.component';

describe('ChildOfchildWithIdComponent', () => {
  let component: ChildOfchildWithIdComponent;
  let fixture: ComponentFixture<ChildOfchildWithIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildOfchildWithIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildOfchildWithIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
