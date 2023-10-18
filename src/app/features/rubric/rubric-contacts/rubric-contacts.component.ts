import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-rubric-contacts',
  templateUrl: './rubric-contacts.component.html',
  styleUrls: ['./rubric-contacts.component.scss']
})
export class RubricContactsComponent {

@Input()  contacts : Contact[] =[]

@Output() create = new EventEmitter<Contact>()
@Output() delete = new EventEmitter<number | null>()
@Output() save = new EventEmitter<Contact>()

onCreate(contact: Contact){
  this.create.emit(contact)
}

onDelete(id: number | null ){
  this.delete.emit(id)
}

onSave(contact: Contact){
  this.save.emit(contact)
}

}
