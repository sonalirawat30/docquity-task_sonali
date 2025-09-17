import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarsCardsComponent } from './webinars-cards.component';

describe('WebinarsCardsComponent', () => {
  let component: WebinarsCardsComponent;
  let fixture: ComponentFixture<WebinarsCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebinarsCardsComponent]
    });
    fixture = TestBed.createComponent(WebinarsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
