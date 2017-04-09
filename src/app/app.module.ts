import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {OriginComponent} from './origin/origin.component';
import {ResortsComponent} from './resort/resorts.component';
import {ResortComponent} from './resort/resort.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {AllianceComponent} from './alliance/alliance.component';

@NgModule({
  declarations: [
    AppComponent,
    OriginComponent,
    ResortComponent,
    ResortsComponent,
    ScheduleComponent,
    AllianceComponent
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
