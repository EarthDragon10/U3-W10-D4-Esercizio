import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeaderSearchBarComponent } from './header-search-bar/header-search-bar.component';
import { HeaderNavbarBrandComponent } from './header-navbar-brand/header-navbar-brand.component';
import { HeaderItemDropdownComponent } from './header-item-dropdown/header-item-dropdown.component';
import { HeaderNavbarCollapseComponent } from './header-navbar-collapse/header-navbar-collapse.component';
import { Page1Component } from './page1/page1.component';
import { MainComponent } from './main/main.component';
import { FormContattiComponent } from './main/form-contatti/form-contatti.component';
import { ListContactsComponent } from './main/list-contacts/list-contacts.component';
import { DetailContactComponent } from './main/detail-contact/detail-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HeaderItemDropdownComponent,
    HeaderNavbarBrandComponent,
    HeaderSearchBarComponent,
    HeaderNavbarCollapseComponent,
    Page1Component,
    MainComponent,
    FormContattiComponent,
    ListContactsComponent,
    DetailContactComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
