import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-rubric-new-contact',
  templateUrl: './rubric-new-contact.component.html',
  styleUrls: ['./rubric-new-contact.component.scss'],
})
export class RubricNewContactComponent {
  @Output() create = new EventEmitter<Contact>();

  constructor(private formBuilder: FormBuilder) {}

  setActive?: boolean;

  form = this.formBuilder.group({
    name: this.formBuilder.control<string>(''),
    surname: this.formBuilder.control<string>(''),
    email: this.formBuilder.control<string>(''),
    phone: this.formBuilder.control<string>(''),
  });

  onCreate() {
    this.create.emit(this.form.value);
    const defaultValue = {
      name: '',
      surname: '',
      email: '',
      phone: '',
    };
    this.form.reset(defaultValue);
    this.setActive = false;
  }
}
