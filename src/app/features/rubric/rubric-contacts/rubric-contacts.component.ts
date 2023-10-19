import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { DataService } from 'src/app/services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rubric-contacts',
  templateUrl: './rubric-contacts.component.html',
  styleUrls: ['./rubric-contacts.component.scss'],
})
export class RubricContactsComponent implements OnInit, OnDestroy {
  constructor(private dataService: DataService, private http: HttpClient) {}

  @Input() totalContacts?: number
  //totalitems?: number;

  ngOnInit(): void {
    // this.subs.add(
    //   this.http
    //     .get<Contact[]>('http://localhost:3000/contacts')
    //     .subscribe((items) => {
    //       this.totalitems = items.length;
    //     })
    // );
  }

  subs = new Subscription();

  @Input() contacts: Contact[] = [];

  @Output() create = new EventEmitter<Contact>();
  @Output() delete = new EventEmitter<number | null>();
  @Output() save = new EventEmitter<Contact>();

  onCreate(contact: Contact) {
    this.create.emit(contact);
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
  page: number = 1;
  paginateData(page: number) {
    this.page = this.page + 1;
    this.subs.add(
      this.dataService.getData(page).subscribe((contacts) => {

        this.contacts = contacts.body!;
      })
    );
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
