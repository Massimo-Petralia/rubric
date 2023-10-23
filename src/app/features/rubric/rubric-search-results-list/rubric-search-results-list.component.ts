import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, AfterViewInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rubric-search-results-list',
  templateUrl: './rubric-search-results-list.component.html',
  styleUrls: ['./rubric-search-results-list.component.scss']
})
export class RubricSearchResultsListComponent implements AfterViewInit{
  constructor(private formBuilder: FormBuilder){}
@Input() searchResultsList?: Contact[]
@Input() toggleView?: boolean


@Output() back = new EventEmitter<boolean>()


@Input() item: Partial<Contact> = {}

form = this.formBuilder.group({
  name: this.formBuilder.control<string>(''),
  surname: this.formBuilder.control<string>(''),
  email: this.formBuilder.control<string>(''),
  phone: this.formBuilder.control<string>('')
})

ngAfterViewInit(): void {
  debugger
// this.form.controls.name.patchValue(this.item.name!);
// this.form.controls.surname.patchValue(this.item.surname!)
debugger
}

onBack(){
  this.back.emit(false)
}

}
