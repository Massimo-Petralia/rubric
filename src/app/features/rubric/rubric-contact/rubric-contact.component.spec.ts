import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricContactComponent } from './rubric-contact.component';

describe('RubricContactComponent', () => {
  let component: RubricContactComponent;
  let fixture: ComponentFixture<RubricContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RubricContactComponent]
    });
    fixture = TestBed.createComponent(RubricContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
