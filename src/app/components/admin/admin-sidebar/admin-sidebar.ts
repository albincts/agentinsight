import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router'; 
import { Performance } from '../performance/performance';

@Component({
  selector: 'app-admin-sidebar',
  imports: [RouterOutlet, RouterLinkWithHref, Performance],
  templateUrl: './admin-sidebar.html',
  styleUrl: './admin-sidebar.css',
})
export class AdminSidebar {

}
