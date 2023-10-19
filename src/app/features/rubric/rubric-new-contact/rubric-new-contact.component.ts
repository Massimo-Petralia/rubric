import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-rubric-new-contact',
  templateUrl: './rubric-new-contact.component.html',
  styleUrls: ['./rubric-new-contact.component.scss'],
})
export class RubricNewContactComponent {

  @Output() create = new EventEmitter<Contact>();

  constructor(private formBuilder: FormBuilder) {}

  setActive: BooleanInput;

  @Input() currentPage?: number
  @Output() getpage = new EventEmitter<number>() 

  form = this.formBuilder.group({
    name: this.formBuilder.control<string>(''),
    surname: this.formBuilder.control<string>(''),
    email: this.formBuilder.control<string>(''),
    phone: this.formBuilder.control<string>(''),
  });

  onCreate() {
    this.setActive = false ;
    this.create.emit(this.form.value);
    this.getpage.emit(this.currentPage)
    const defaultValue = {
      name: '',
      surname: '',
      email: '',
      phone: '',
    };
    this.form.reset(defaultValue);
  }
}
