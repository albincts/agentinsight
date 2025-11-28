import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { AgentDashboard } from './components/agent-dashboard/agent-dashboard';
import { AgentSales } from './components/agent/agent-sales/agent-sales';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
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
