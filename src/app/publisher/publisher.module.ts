import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublisherComponent } from './publisher.component';
import { PublisherRoutingModule } from './publisher.routing';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    PublisherRoutingModule
  ],
  declarations: [PublisherComponent, LoginComponent, DashboardComponent]
})
export class PublisherModule { }
