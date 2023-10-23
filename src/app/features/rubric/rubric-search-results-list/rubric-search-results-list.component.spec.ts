import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricSearchResultsListComponent } from './rubric-search-results-list.component';

describe('RubricSearchResultsListComponent', () => {
  let component: RubricSearchResultsListComponent;
  let fixture: ComponentFixture<RubricSearchResultsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RubricSearchResultsListComponent]
    });
    fixture = TestBed.createComponent(RubricSearchResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
