import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionComponentComponent } from './section-component.component';

describe('SectionComponentComponent', () => {
  let component: SectionComponentComponent;
  let fixture: ComponentFixture<SectionComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionComponentComponent]
    });
    fixture = TestBed.createComponent(SectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
