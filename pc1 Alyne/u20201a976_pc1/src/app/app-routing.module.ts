import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TablaComponent } from './componets/tabla/tabla.component';

const routes: Routes = [
  {path:'home', component:TablaComponent},
  //cuando la direccion sea cualquiera se redirecciona a Home
  {path:'**',pathMatch:'full', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
