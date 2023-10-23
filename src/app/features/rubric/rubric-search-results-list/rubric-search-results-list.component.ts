import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-rubric-search-results-list',
  templateUrl: './rubric-search-results-list.component.html',
  styleUrls: ['./rubric-search-results-list.component.scss']
})
export class RubricSearchResultsListComponent {
@Input() searchResultsList?: Contact[]
@Input() toggleView?: boolean

@Output() back = new EventEmitter<boolean>()


onBack(){
  this.back.emit(false)
}

}
