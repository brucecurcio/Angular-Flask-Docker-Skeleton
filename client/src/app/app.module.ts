import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { DashComponent } from './dash/dash.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './message/message.component';
import { LogsComponent } from './logs/logs.component';
import { EscIntakeFormComponent } from './esc-intake-form/esc-intake-form.component';
import { FieldEscalationComponent } from './field-escalation/field-escalation.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DropQMComponent } from './drop-qm/drop-qm.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashComponent,
    Navbar2Component,
    MessageComponent,
    LogsComponent,
    EscIntakeFormComponent,
    FieldEscalationComponent,
    ScheduleComponent,
    DropQMComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
