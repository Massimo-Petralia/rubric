import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricContactsComponent } from './rubric-contacts.component';

describe('RubricContactsComponent', () => {
  let component: RubricContactsComponent;
  let fixture: ComponentFixture<RubricContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RubricContactsComponent]
    });
    fixture = TestBed.createComponent(RubricContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
