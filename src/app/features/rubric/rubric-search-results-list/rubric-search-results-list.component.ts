import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-rubric-search-results-list',
  templateUrl: './rubric-search-results-list.component.html',
  styleUrls: ['./rubric-search-results-list.component.scss']
})
export class RubricSearchResultsListComponent {
@Input() searchResultsList?: Contact[]
@Input() toggleView?: boolean
}
