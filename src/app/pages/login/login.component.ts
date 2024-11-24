import { Component } from '@angular/core';
import { BtnFilledComponent } from '../../modules/btn-filled/btn-filled.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    BtnFilledComponent,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
