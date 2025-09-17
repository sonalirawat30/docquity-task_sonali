import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarTabComponent } from './webinar-tab.component';

describe('WebinarTabComponent', () => {
  let component: WebinarTabComponent;
  let fixture: ComponentFixture<WebinarTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebinarTabComponent]
    });
    fixture = TestBed.createComponent(WebinarTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
