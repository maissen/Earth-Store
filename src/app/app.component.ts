import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from "./modules/footer/footer.component";
import { NavbarComponent } from './modules/navbar/navbar.component';
import { ShopComponent } from "./pages/shop/shop.component";
import { RegisterComponent } from './pages/register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ShopComponent,
    RegisterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';
}
