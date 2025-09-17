import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarsMayLikeComponent } from './webinars-may-like.component';

describe('WebinarsMayLikeComponent', () => {
  let component: WebinarsMayLikeComponent;
  let fixture: ComponentFixture<WebinarsMayLikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebinarsMayLikeComponent]
    });
    fixture = TestBed.createComponent(WebinarsMayLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
