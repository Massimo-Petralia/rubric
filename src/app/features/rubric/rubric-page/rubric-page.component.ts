import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { DataService } from 'src/app/services/data.service';
import { OnDestroy } from '@angular/core';


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


  ngOnInit(): void {
    this.subs.add(
      this.dataService.getData(1).subscribe((contacts) => {
        const xTotalCount = contacts.headers.get('X-total-count');
        if (xTotalCount) {
          this.totalContacts = Number(xTotalCount);
        }
        this.contacts = contacts.body!;
      })
    );
  };



  onCreate(contact: Contact) {
    this.subs.add(
      this.dataService
        .createContact(contact)
        .subscribe((contact) => {
          (this.contacts = [...this.contacts, contact]);
        })
    );
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
