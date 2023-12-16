import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDemoComponent } from './material-demo.component';

describe('MaterialDemoComponent', () => {
  let component: MaterialDemoComponent;
  let fixture: ComponentFixture<MaterialDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialDemoComponent]
    });
    fixture = TestBed.createComponent(MaterialDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
