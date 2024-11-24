import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-filled',
  standalone: true,
  imports: [],
  templateUrl: './btn-filled.component.html',
  styleUrl: './btn-filled.component.scss'
})
export class BtnFilledComponent {
  @Input() text:string = "default text";
  @Input() link:string = "/";
}
