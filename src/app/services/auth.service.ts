import { Injectable, signal, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Agent } from '../models/agent.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private doc = inject(DOCUMENT);
  isAuthenticated = signal(false);
  currentUser = signal<Agent | null>(null);

  constructor() {
    this.checkAuth();
  }

  private isLocalStorageAvailable(): boolean {
    return typeof this.doc !== 'undefined' && !!this.doc.defaultView?.localStorage;
  }

  login(email: string, password: string): boolean {
    if (email === 'agent@gmail.com' && password === 'Password@1') {
      const agent: Agent = {
        agentid: 'A-001',
        name: 'Accomua',
        email,
        phone: '555-0123',
        role: 'agent'
      };
      this.isAuthenticated.set(true);
      this.currentUser.set(agent);
      
      if (this.isLocalStorageAvailable()) {
        localStorage.setItem('user', JSON.stringify(agent));
      }
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated.set(false);
    this.currentUser.set(null);
    
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('user');
    }
  }

  checkAuth(): boolean {
    if (this.isLocalStorageAvailable()) {
      const user = localStorage.getItem('user');
      if (user) {
        this.currentUser.set(JSON.parse(user) as Agent);
        this.isAuthenticated.set(true);
        return true;
      }
    }
    return false;
  }
}
