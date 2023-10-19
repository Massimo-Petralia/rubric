import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { DataService } from 'src/app/services/data.service';
import { OnDestroy } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-rubric-page',
  templateUrl: './rubric-page.component.html',
  styleUrls: ['./rubric-page.component.scss'],
})
export class RubricPageComponent implements OnInit, OnDestroy {
  constructor(private dataService: DataService) {}

  contacts: Contact[] = [];

  subs = new Subscription();

  totalContacts?: number;

  // page!: number;

  getContactsPage(page: number) {
    debugger;
    this.dataService.getData(page).subscribe((contacts) => {
      const xTotalCount = contacts.headers.get('X-total-count');
      if (xTotalCount) {
        this.totalContacts = Number(xTotalCount);
      }
      this.contacts = contacts.body!;
      debugger;
    });
  }

  ngOnInit(): void {
    const page = 1;
    this.getContactsPage(page);
  }

  onCreate(contact: Contact) {
    this.subs.add(this.dataService.createContact(contact).subscribe(() => {}));
  }

  onDelete(id: number | null) {
    this.subs.add(
      this.dataService.deleteContact(id).subscribe(() => {
        this.contacts = this.contacts.filter((contact) => contact.id !== id);
      })
    );
  }

  onSave(contact: Contact) {
    this.subs.add(this.dataService.updateContact(contact).subscribe());
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
