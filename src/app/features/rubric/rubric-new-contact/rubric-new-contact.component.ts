import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rubric-new-contact',
  templateUrl: './rubric-new-contact.component.html',
  styleUrls: ['./rubric-new-contact.component.scss']
})
export class RubricNewContactComponent {

  constructor(private formBuilder: FormBuilder){}

  form = this.formBuilder.group({
    name: this.formBuilder.control<string>(''),
    surname: this.formBuilder.control<string>(''),
    email: this.formBuilder.control<string>(''),
    phone: this.formBuilder.control<string>(''),
  })

}
