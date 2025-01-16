import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Routes } from '@angular/router';

export const routes: Routes = [

{path:'',redirectTo:'/inicio', pathMatch:'full'},
{path:'iniciar-sesion', component: LoginComponent, title:'iniciar-sesion'},
{path:'inicio', component: DashboardComponent, title:'inicio'},
];
