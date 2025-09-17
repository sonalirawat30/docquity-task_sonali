import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarsFiltersComponent } from './webinars-filters.component';

describe('WebinarsFiltersComponent', () => {
  let component: WebinarsFiltersComponent;
  let fixture: ComponentFixture<WebinarsFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebinarsFiltersComponent]
    });
    fixture = TestBed.createComponent(WebinarsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
