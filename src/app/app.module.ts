import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { it_IT } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import it from '@angular/common/locales/it';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RubricPageComponent } from './features/rubric/rubric-page/rubric-page.component';
import { RubricContactsComponent } from './features/rubric/rubric-contacts/rubric-contacts.component';

import { ngZorroAntdModule } from './ng-zorro-antd.module';
import { RubricContactComponent } from './features/rubric/rubric-contact/rubric-contact.component';

registerLocaleData(it);

@NgModule({
  declarations: [
    AppComponent,
    RubricPageComponent,
    RubricContactsComponent,
    RubricContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ngZorroAntdModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: it_IT }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
