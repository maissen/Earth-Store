import { Component } from '@angular/core';
import { BtnFilledComponent } from '../../../../modules/btn-filled/btn-filled.component';

@Component({
  selector: 'home-header',
  standalone: true,
  imports: [
    BtnFilledComponent,
    
  ],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss'
})
export class HomeHeaderComponent {

}
