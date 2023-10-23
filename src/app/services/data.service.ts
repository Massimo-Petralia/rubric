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

  getData(page: number) {
    return this.http
      .get<Contact[]>(`http://localhost:3000/contacts?_page=${page}`, {
        observe: 'response',
      })
      .pipe(
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
  }

  deleteContact(id: number | null) {
    return this.http.delete(`${this.dataURL}/${id}`).pipe(
      catchError((error) => {
        console.error('delete fail', error);
        throw error;
      })
    );
  }

  updateContact(contact: Contact) {
    return this.http
      .put<Contact>(`${this.dataURL}/${contact.id}`, contact)
      .pipe(
        catchError((error) => {
          console.error('update fail', error);
          throw error;
        })
      );
  };

  searchText(text: string){
     return this.http.get<Contact[]>(`${this.dataURL}?q=${text}`).pipe(
      catchError((error)=>{
        console.error('get text searching fail', error)
        throw error
      })
    )
  }
}
