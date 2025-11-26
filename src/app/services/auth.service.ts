import { Injectable, signal, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private doc = inject(DOCUMENT);
  isAuthenticated = signal(false);
  currentUser = signal<any>(null);

  constructor() {
    this.checkAuth();
  }

  private isLocalStorageAvailable(): boolean {
    return typeof this.doc !== 'undefined' && !!this.doc.defaultView?.localStorage;
  }

  login(email: string, password: string): boolean {
    if (email === 'agent@gmail.com' && password === 'Password@1') {
      this.isAuthenticated.set(true);
      this.currentUser.set({ email, role: 'agent' });
      
      if (this.isLocalStorageAvailable()) {
        localStorage.setItem('user', JSON.stringify({ email, role: 'agent' }));
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
        this.currentUser.set(JSON.parse(user));
        this.isAuthenticated.set(true);
        return true;
      }
    }
    return false;
  }
}
