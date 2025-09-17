import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarsBasedCardiologyComponent } from './webinars-based-cardiology.component';

describe('WebinarsBasedCardiologyComponent', () => {
  let component: WebinarsBasedCardiologyComponent;
  let fixture: ComponentFixture<WebinarsBasedCardiologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebinarsBasedCardiologyComponent]
    });
    fixture = TestBed.createComponent(WebinarsBasedCardiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
