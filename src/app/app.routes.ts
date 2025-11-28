import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { AgentDashboard } from './components/agent-dashboard/agent-dashboard';
import { AgentSales } from './components/agent/agent-sales/agent-sales';
import { AuthGuard } from './guards/auth.guard';
import { AdminSidebar } from './components/admin/admin-sidebar/admin-sidebar';
import { AdminDashboard } from './components/admin/admin-dashboard/admin-dashboard';
import { Performance } from './components/admin/performance/performance';
import { App } from './app';

export const routes: Routes = [
  { path: '', component:App },
  { path: 'login', component: Login },
  {path: 'admin', component: AdminSidebar}, 
  {path: 'admin-dashboard', component: AdminDashboard},
  {path: 'performance', component: Performance},
  {
    path: 'agent',
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: AgentDashboard },
      { path: 'sales', component: AgentSales } // added sales route
    ]
  },
  { path: '**', redirectTo: '/login' }
];
