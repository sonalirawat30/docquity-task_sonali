import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveWebinarComponent } from './live-webinar.component';

describe('LiveWebinarComponent', () => {
  let component: LiveWebinarComponent;
  let fixture: ComponentFixture<LiveWebinarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveWebinarComponent]
    });
    fixture = TestBed.createComponent(LiveWebinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
