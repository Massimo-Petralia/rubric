import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { it_IT } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import it from '@angular/common/locales/it';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RubricPageComponent } from './features/rubric/rubric-page/rubric-page.component';
import {RubricContactListComponent } from './features/rubric/rubric-contacts/rubric-contact-list.component';
import { RubricContactComponent } from './features/rubric/rubric-contact/rubric-contact.component';
import { RubricNewContactComponent } from './features/rubric/rubric-new-contact/rubric-new-contact.component';

import { ngZorroAntdModule } from './ng-zorro-antd.module';
import { RubricSearchResultsListComponent } from './features/rubric/rubric-search-results-list/rubric-search-results-list.component';

registerLocaleData(it);

@NgModule({
  declarations: [
    AppComponent,
    RubricPageComponent,
    RubricContactListComponent,
    RubricContactComponent,
    RubricNewContactComponent,
    RubricSearchResultsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ngZorroAntdModule,
 
  ],
  providers: [
    { provide: NZ_I18N, useValue: it_IT }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
