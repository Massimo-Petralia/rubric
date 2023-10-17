import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricPageComponent } from './rubric-page.component';

describe('RubricPageComponent', () => {
  let component: RubricPageComponent;
  let fixture: ComponentFixture<RubricPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RubricPageComponent]
    });
    fixture = TestBed.createComponent(RubricPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
