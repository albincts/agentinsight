import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-agent-dashboard',
  standalone: true,
  imports: [CommonModule, Sidebar],
  templateUrl: './agent-dashboard.html',
  styleUrl: './agent-dashboard.css'
})
export class AgentDashboard {
  stats = [
    { label: 'Total Sales', value: '$50,200', icon: 'S' },
    { label: 'Incentives Earned', value: '$7,500', icon: '🏆' },
    { label: 'Rank', value: '3', icon: '3' }
  ];

  recentSales = [
    { policy: 'Life', date: '04/20/2024', amount: '$1,200' },
    { policy: 'Auto', date: '04/18/2024', amount: '$1,500' },
    { policy: 'Life', date: '04/17/2024', amount: '$1,800' },
    { policy: 'Home', date: '04/15/2024', amount: '$1,200' }
  ];

  leaderboard = [
    { rank: 1, name: 'Accoame', score: 1 },
    { rank: 2, name: 'Accounte', score: 2 },
    { rank: 3, name: 'Account', score: 3 },
    { rank: 4, name: 'Accountant', score: 4 },
    { rank: 5, name: 'Account 5', score: 5 }
  ];

  quickLinks = [
    { label: 'Add Sale', icon: '+' },
    { label: 'View Incentives', icon: '>' }
  ];
}
