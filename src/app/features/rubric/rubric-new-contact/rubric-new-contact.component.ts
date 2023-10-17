import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-rubric-new-contact',
  templateUrl: './rubric-new-contact.component.html',
  styleUrls: ['./rubric-new-contact.component.scss']
})
export class RubricNewContactComponent {

  constructor(private formBuilder: FormBuilder){}

  @Output() create = new EventEmitter<Contact>()

  form = this.formBuilder.group({
    name: this.formBuilder.control<string>(''),
    surname: this.formBuilder.control<string>(''),
    email: this.formBuilder.control<string>(''),
    phone: this.formBuilder.control<string>(''),
  })

}
