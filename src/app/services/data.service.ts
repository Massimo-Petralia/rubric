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
        console.error('get contacts failed', error);
        throw error;
      })
    );
  }
}
