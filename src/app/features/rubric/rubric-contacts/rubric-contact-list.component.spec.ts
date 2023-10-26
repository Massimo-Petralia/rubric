import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricContactListComponent } from './rubric-contact-list.component';

describe('RubricContactsComponent', () => {
  let component: RubricContactListComponent;
  let fixture: ComponentFixture<RubricContactListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RubricContactListComponent]
    });
    fixture = TestBed.createComponent(RubricContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
