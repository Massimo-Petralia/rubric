import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { DataService } from 'src/app/services/data.service';
import { OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RubricContactListComponent } from '../rubric-contacts/rubric-contact-list.component';

@Component({
  selector: 'app-rubric-page',
  templateUrl: './rubric-page.component.html',
  styleUrls: ['./rubric-page.component.scss'],
})
export class RubricPageComponent implements OnInit, OnDestroy {

  @ViewChild(RubricContactListComponent) contactListComponent!: RubricContactListComponent;
  constructor(private dataService: DataService, private http: HttpClient) {}

  contacts: Contact[] = [];

  totalContacts?: number;

  page!: number;

  subs = new Subscription();

  getContactsPages(page: number) {
    this.subs.add(
      this.dataService.getData(page).subscribe((response) => {
        const xTotalCount = response.headers.get('X-total-count');
        if (xTotalCount) {
          this.totalContacts = Number(xTotalCount);
          this.contacts = response.body!.reverse();
        }
      })
    );
    return (this.page = page);
  }

  ngOnInit(): void {
    const firstpage = 1;
    this.getContactsPages(firstpage);
  }

  onCreate(contact: Contact) {
    this.subs.add(
      this.dataService.createContact(contact).subscribe(() => {
        if (this.contacts.length >= 10) {
          this.page = this.page + 1;
          this.getContactsPages(this.page);
        } else {
          this.getContactsPages(this.page);
        }
      })
    );
  }

  onDelete(id: number | null) {
    this.subs.add(
      this.dataService.deleteContact(id).subscribe(() => {
        this.contacts = this.contacts.filter((contact) => contact.id !== id);
        if (!this.contacts.length) {
          this.getContactsPages(this.page);
        }
      })
    );
  }

  onSave(contact: Contact) {
    this.subs.add(this.dataService.updateContact(contact).subscribe());
  }



onSearch(text: string){
this.subs.add(
  this.dataService.searchText(text).subscribe((data)=> {
    if(!data.length){
      this.contactListComponent.notFoundMess = true
      setTimeout(() => {
        this.contactListComponent.notFoundMess = false;
      }, 2000);
      console.log('nessun risultato trovato')
      return
    }
    this.contacts = data
  })
)
}

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
