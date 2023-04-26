import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFirtsComponentComponent } from './my-firts-component/my-firts-component.component';
import { MyHeaderComponent } from './comp/my-header/my-header.component';
import { MyBodyComponent } from './comp/my-body/my-body.component';
import { MyLeftComponent } from './comp/my-left/my-left.component';
import { MyRightComponent } from './comp/my-right/my-right.component';
import { MyFooterComponent } from './comp/my-footer/my-footer.component';

@NgModule({
  declarations: [//aqui van los componentes, basicamente se declaran
    AppComponent,
    MyFirtsComponentComponent,
    MyHeaderComponent,
    MyBodyComponent,
    MyLeftComponent,
    MyRightComponent,
    MyFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
