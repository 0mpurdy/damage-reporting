import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ReportOverview, FakeReportService, ReportItem } from '../report';
import { KeysPipe } from '../pipes/keys/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReportOverview,
    ReportItem,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FakeReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
