import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router'; 

@Component({
  selector: 'app-admin-sidebar',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './admin-sidebar.html',
  styleUrl: './admin-sidebar.css',
})
export class AdminSidebar {

}
