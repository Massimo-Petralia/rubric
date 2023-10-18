import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-rubric-contact',
  templateUrl: './rubric-contact.component.html',
  styleUrls: ['./rubric-contact.component.scss'],
})
export class RubricContactComponent implements OnChanges {
  
  @Input() contact: Partial<Contact> = {};

  @Output() delete = new EventEmitter<number | null>();

  @Output() save = new EventEmitter<Contact>()


  
  form = this.formBuilder.group({
    name: this.formBuilder.control<string>(''),
    surname: this.formBuilder.control<string>(''),
    email: this.formBuilder.control<string>(''),
    phone: this.formBuilder.control<string>(''),
    id: this.formBuilder.control<number | null>(null)
  });
  constructor(private formBuilder: FormBuilder) {}

ngOnChanges(changes: SimpleChanges): void {
  const {contact} = changes

if(contact){
  this.form.patchValue(this.contact || {})
}

}

onDelete(){
  this.delete.emit(this.form.value.id)
}

onSave(){
  this.save.emit(this.form.value)
}

}
