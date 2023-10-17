import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rubric-contact',
  templateUrl: './rubric-contact.component.html',
  styleUrls: ['./rubric-contact.component.scss'],
})
export class RubricContactComponent {
  constructor(private formBuilder: FormBuilder) {}

  form = this.formBuilder.group({
    name: this.formBuilder.control<string>(''),
    surname: this.formBuilder.control<string>(''),
    email: this.formBuilder.control<string>(''),
    phone: this.formBuilder.control<string>(''),
  });
}
