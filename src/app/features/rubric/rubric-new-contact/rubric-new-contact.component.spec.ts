import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricNewContactComponent } from './rubric-new-contact.component';

describe('RubricNewContactComponent', () => {
  let component: RubricNewContactComponent;
  let fixture: ComponentFixture<RubricNewContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RubricNewContactComponent]
    });
    fixture = TestBed.createComponent(RubricNewContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
