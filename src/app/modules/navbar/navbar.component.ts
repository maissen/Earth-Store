import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SessionService } from 'src/app/services/session.service';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: User | null = null;

  constructor(
    private authService: AuthService,
    private sessionService: SessionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCurrentUser();
  }

  loadCurrentUser(): void {
    this.currentUser = this.sessionService.getCurrentUser();
  }

  onLogout(): void {
    this.authService.logout();
    this.currentUser = null;
  }
}
