import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { DataService } from 'src/app/services/data.service';
import { OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rubric-page',
  templateUrl: './rubric-page.component.html',
  styleUrls: ['./rubric-page.component.scss'],
})
export class RubricPageComponent implements OnInit, OnDestroy {
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

searchResultsList?: Contact[]
toggleView?: boolean = false
search(){
  this.subs.add(
    this.http.get<Contact[]>('http://localhost:3000/contacts?q=pippo').subscribe((response)=>{
      if(response.length){
        this.toggleView = true
        this.searchResultsList = response;
      } else this.toggleView = false
      console.log('search response: ', response)
    })
    )
 
}

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
