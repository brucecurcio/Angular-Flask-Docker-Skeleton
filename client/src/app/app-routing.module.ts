import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FieldEscalationComponent } from './field-escalation/field-escalation.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DropQMComponent } from './drop-qm/drop-qm.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  
  {
    path: "FieldEscalation",
    component: FieldEscalationComponent
  },
  {
    path: "Schedule",
    component: ScheduleComponent
  },
  {
    path: "DropQM",
    component: DropQMComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
