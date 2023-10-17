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

onCreate(contact: Contact){
  this.create.emit(contact)
}

}
