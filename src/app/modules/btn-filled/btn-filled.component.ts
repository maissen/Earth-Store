import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-btn-filled',
  templateUrl: './btn-filled.component.html',
  styleUrls: ['./btn-filled.component.scss']
})
export class BtnFilledComponent {
  @Input() text:string = "default text";
  @Input() link:string = "";
}
