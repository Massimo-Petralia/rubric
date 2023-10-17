import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-rubric-contact',
  templateUrl: './rubric-contact.component.html',
  styleUrls: ['./rubric-contact.component.scss'],
})
export class RubricContactComponent {
  
  @Input() contact?: Contact

  constructor(private formBuilder: FormBuilder) {}

  form = this.formBuilder.group({
    name: this.formBuilder.control<string>(''),
    surname: this.formBuilder.control<string>(''),
    email: this.formBuilder.control<string>(''),
    phone: this.formBuilder.control<string>(''),
  });
}
