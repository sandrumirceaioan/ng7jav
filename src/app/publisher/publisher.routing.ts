import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublisherComponent } from './publisher.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', 
    component: PublisherComponent,
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'login', component: LoginComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class PublisherRoutingModule { }