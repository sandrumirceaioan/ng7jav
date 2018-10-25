import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '', 
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard' },
      { 
        path: 'dashboard', 
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canLoad: [ AuthGuard ]
      },
      { 
        path: 'login', 
        component: LoginComponent
      }
    ],
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class AdminRoutingModule { }