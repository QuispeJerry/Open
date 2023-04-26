import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PeliculasTableComponent } from './component/peliculas-table/peliculas-table.component';
import { HomeComponent } from './component/home/home.component';
const routes: Routes = [

  {path:'', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'business/peliculas', component: PeliculasTableComponent },
  { path: '**', redirectTo:'home'  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
