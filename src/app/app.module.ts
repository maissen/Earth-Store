import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { FooterComponent } from './modules/footer/footer.component';
import { BtnFilledComponent } from './modules/btn-filled/btn-filled.component';
import { ProductsGridContainerComponent } from './modules/products-grid-container/products-grid-container.component';
import { HomeHeaderComponent } from './pages/home/modules/home-header/home-header.component';
import { HomeNewArrivelsComponent } from './pages/home/modules/home-new-arrivels/home-new-arrivels.component';
import { HomeTestimonialsComponent } from './pages/home/modules/home-testimonials/home-testimonials.component';
import { HomeCallToActionComponent } from './pages/home/modules/home-call-to-action/home-call-to-action.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    BtnFilledComponent,
    ProductsGridContainerComponent,
    HomeHeaderComponent,
    HomeNewArrivelsComponent,
    HomeTestimonialsComponent,
    HomeCallToActionComponent,
    ShopComponent,
    ProductInfoComponent,
    ShoppingListComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
