import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WarningAlert } from './warning-alert/warning-alert.component';
import { SuccessAlert } from './success-alert/success-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlert,
    SuccessAlert
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
