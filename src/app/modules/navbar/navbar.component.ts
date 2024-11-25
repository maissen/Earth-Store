import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  shouldHideLinks(): boolean {
    const currentUrl = this.router.url;
    return currentUrl.includes('/login') || currentUrl.includes('/register');
  }

  onLogout(): void {
    this.authService.logout();
  }
}
