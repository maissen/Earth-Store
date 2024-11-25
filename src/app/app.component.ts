import { Component } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EarthStore';

  currentUser: User | null = null;

  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {
    this.currentUser = this.sessionService.getCurrentUser();
  }
}
