import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rubric-contact-list',
  templateUrl: './rubric-contact-list.component.html',
  styleUrls: ['./rubric-contact-list.component.scss'],
})
export class RubricContactListComponent {
constructor(private formBuilder: FormBuilder){}

  newContact?: string | null;

  showSaved: boolean = false;

  @Input() currentPage!: number;

  @Input() totalContacts?: number;

  @Input() contacts: Contact[] = [];

  @Output() page = new EventEmitter<number>();

  @Output() create = new EventEmitter<Contact>();
  @Output() delete = new EventEmitter<number | null>();
  @Output() save = new EventEmitter<Contact>();
  @Output() searchWord = new EventEmitter<string>()

form = this.formBuilder.group({
  search: this.formBuilder.control<string>('')
})
  //search? = this.formBuilder.control<string>('')

  paginateData(page: number) {
    this.page.emit(page);
  }

  onCreate(contact: Contact) {
    this.create.emit(contact);
    this.newContact = contact.name;
    this.showSaved = true;
    setTimeout(() => {
      this.showSaved = false;
    }, 2000);
  }

  onDelete(id: number | null) {
    this.delete.emit(id);
  }

  onSave(contact: Contact) {
    this.save.emit(contact);
  }

  sortAlphabetically() {
    this.contacts = this.contacts.sort((a, b) => {
      const charA = a.name!.charAt(0).toUpperCase();
      const charB = b.name!.charAt(0).toUpperCase();
      if (charA < charB) {
        return -1;
      }
      if (charA > charB) {
        return 1;
      }
      return 0;
    });
  };

  onSearch(){
    this.searchWord.emit(this.form.controls.search.value!)
  }
}
