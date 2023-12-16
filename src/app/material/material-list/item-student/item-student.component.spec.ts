import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemStudentComponent } from './item-student.component';

describe('ItemStudentComponent', () => {
  let component: ItemStudentComponent;
  let fixture: ComponentFixture<ItemStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemStudentComponent]
    });
    fixture = TestBed.createComponent(ItemStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
