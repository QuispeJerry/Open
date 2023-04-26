import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyheaderComponent } from './com/myheader/myheader.component';
import { MybodyComponent } from './com/mybody/mybody.component';
import { MyfooterComponent } from './com/myfooter/myfooter.component';

import {MatToolbarModule} from '@angular/material/toolbar';//elemento de angular material
import {MatIconModule} from '@angular/material/icon';//elemento de angular material
// import {MaterialModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MyheaderComponent,
    MybodyComponent,
    MyfooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,//elemento de angular material
    MatIconModule//elemento de angular material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
