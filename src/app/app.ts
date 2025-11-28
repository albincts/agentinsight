import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminSidebar } from './components/admin/admin-sidebar/admin-sidebar';
import { Performance } from './components/admin/performance/performance';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdminSidebar, Performance],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
