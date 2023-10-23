import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rubric-search-results-list',
  templateUrl: './rubric-search-results-list.component.html',
  styleUrls: ['./rubric-search-results-list.component.scss']
})
export class RubricSearchResultsListComponent {
@Input() searchResultsList?: any[]
}
