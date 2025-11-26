import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = signal('');
  password = signal('');
  error = signal('');
  loading = signal(false);

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(e: Event): void {
    e.preventDefault();
    this.error.set('');
    this.loading.set(true);

    if (!this.email() || !this.password()) {
      this.error.set('Please fill in all fields');
      this.loading.set(false);
      return;
    }

    setTimeout(() => {
      if (this.authService.login(this.email(), this.password())) {
        this.router.navigate(['/agent/dashboard']);
      } else {
        this.error.set('Invalid email or password');
      }
      this.loading.set(false);
    }, 500);
  }
}
