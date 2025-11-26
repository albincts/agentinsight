import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { AgentDashboard } from './components/agent-dashboard/agent-dashboard';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  {
    path: 'agent',
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: AgentDashboard }
    ]
  },
  { path: '**', redirectTo: '/login' }
];
