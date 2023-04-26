import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';//tambien se importa
import {MatToolbarModule} from '@angular/material/toolbar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterContentComponent } from './footer-content/footer-content.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderContentComponent } from './header-content/header-content.component';

import {ComsumeApiService} from './core/services/consume-api.service';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    FooterContentComponent,
    MainContentComponent,
    HeaderContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    BrowserAnimationsModule

  ],
  providers: [ComsumeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
