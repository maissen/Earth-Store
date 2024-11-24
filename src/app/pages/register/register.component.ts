import { Component } from '@angular/core';
import { BtnFilledComponent } from '../../modules/btn-filled/btn-filled.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    BtnFilledComponent,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
