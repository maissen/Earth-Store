import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { User } from 'src/app/models/user.interface';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EarthStore';
  currentUser: User | null = null;
  snackbarMessage: string | null = null;
  snackbarType: 'success' | 'error' | null = null;

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.loadCurrentUser();

    this.snackbarService.snackbar$.subscribe(snackbar => {
      this.snackbarMessage = snackbar.message;
      this.snackbarType = snackbar.type;

      setTimeout(() => {
        this.snackbarMessage = null;
        this.snackbarType = null;
      }, 3000);
    });
  }

  loadCurrentUser(): void {
    this.currentUser = this.sessionService.getCurrentUser();

    if (!this.currentUser) {
      this.router.navigate(['/login']);
    }
  }
}
