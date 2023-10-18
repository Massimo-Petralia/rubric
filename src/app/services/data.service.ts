import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  dataURL = 'http://localhost:3000/contacts';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<Contact[]>(this.dataURL).pipe(
      catchError((error) => {
        console.error('get contacts fail', error);
        throw error;
      })
    );
  }

  createContact(contact: Contact) {
    return this.http.post<Contact>(this.dataURL, contact).pipe(
      catchError((error) => {
        console.error('post contact fail', error);
        throw error;
      })
    );
  };

  deleteContact(id: number | null){
    return this.http.delete(`${this.dataURL}/${id}`).pipe(
      catchError((error)=> {
        console.error('delete fail', error);
        throw error
      })
    )
  }

}
