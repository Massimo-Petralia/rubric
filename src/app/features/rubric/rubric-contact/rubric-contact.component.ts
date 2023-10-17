import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-rubric-contact',
  templateUrl: './rubric-contact.component.html',
  styleUrls: ['./rubric-contact.component.scss'],
})
export class RubricContactComponent implements OnChanges {
  
  @Input() contact: Partial<Contact> = {}

  
  form = this.formBuilder.group({
    name: this.formBuilder.control<string>(''),
    surname: this.formBuilder.control<string>(''),
    email: this.formBuilder.control<string>(''),
    phone: this.formBuilder.control<string>(''),
  });
  constructor(private formBuilder: FormBuilder) {}

ngOnChanges(changes: SimpleChanges): void {
  const {contact} = changes

if(contact){
  debugger
  this.form.patchValue(this.contact || {})
}

}

}
