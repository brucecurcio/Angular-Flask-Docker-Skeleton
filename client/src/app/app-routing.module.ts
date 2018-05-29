import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogsComponent } from './logs/logs.component';
import { EscIntakeFormComponent } from './esc-intake-form/esc-intake-form.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  
  {
    path: "logs",
    component: LogsComponent
  },
  {
    path: "esc-intake-form",
    component: EscIntakeFormComponent
  },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
