import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-rubric-contacts',
  templateUrl: './rubric-contacts.component.html',
  styleUrls: ['./rubric-contacts.component.scss'],
})
export class RubricContactsComponent implements OnDestroy {
  constructor(private dataService: DataService) {}

  newContact?: string | null;

  showSaved: boolean = false

  subs = new Subscription();

  @Input() totalContacts?: number;

  @Input() contacts: Contact[] = [];

  @Output() getpage = new EventEmitter<number>();

  @Output() create = new EventEmitter<Contact>();
  @Output() delete = new EventEmitter<number | null>();
  @Output() save = new EventEmitter<Contact>();

  paginateData(page: number) {
    this.subs.add(
      this.dataService.getData(page).subscribe((contacts) => {
        const xTotalCount = contacts.headers.get('X-total-count');
        if (xTotalCount) {
          this.totalContacts = Number(xTotalCount);
        }
        this.contacts = contacts.body!;
      })
    );
  }

  onCreate(contact: Contact) {
    this.create.emit(contact);
    this.newContact = contact.name;
    this.showSaved = true
    setTimeout(()=>{this.showSaved = false}, 2000)
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
  }



  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
