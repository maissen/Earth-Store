import { Component } from '@angular/core';
import { BtnFilledComponent } from '../../modules/btn-filled/btn-filled.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    BtnFilledComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
