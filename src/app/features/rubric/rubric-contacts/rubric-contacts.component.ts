import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-rubric-contacts',
  templateUrl: './rubric-contacts.component.html',
  styleUrls: ['./rubric-contacts.component.scss']
})
export class RubricContactsComponent {

@Input()  contacts : Contact[] =[]

}
