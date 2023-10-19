import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnDestroy,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-rubric-contacts',
  templateUrl: './rubric-contacts.component.html',
  styleUrls: ['./rubric-contacts.component.scss'],
})
export class RubricContactsComponent implements OnChanges, OnDestroy {
  constructor(private dataService: DataService){}

  subs = new Subscription();

  //message = "Non ci sono contatti nella rubrica puoi aggiungerne uno cliccando Create new contact"

  @Input() totalContacts?: number;


  @Input() contacts: Contact[] = [];


  @Output() create = new EventEmitter<Contact>();
  @Output() delete = new EventEmitter<number | null>();
  @Output() save = new EventEmitter<Contact>();

  ngOnChanges(changes: SimpleChanges): void {
    // const contacts = changes
    // if(contacts){
    //   this.message = "pagina vuota"
    // }
  }

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
  paginateData(page: number){
    this.subs.add(
      this.dataService.getData(page).subscribe((contacts)=>{
           const xTotalCount = contacts.headers.get('X-total-count');
        if (xTotalCount) {
          this.totalContacts = Number(xTotalCount);
        }
        this.contacts = contacts.body!
      })

    )
  }

ngOnDestroy(): void {
  this.subs.unsubscribe()
}

}
