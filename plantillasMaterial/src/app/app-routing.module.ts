import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogginComponent } from './components/loggin/loggin.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch:'full'},//cuando la ruta esta vacia
  {path: 'login', component:LogginComponent},
  {path:'dashboard', loadChildren:()=>import('./components/dashboard/dashboard.module').then(x=> x.DashboardModule)},//el roden si importa
  {path:'usuarios', loadChildren:()=>import('./components/dashboard/usuarios/usuarios.module').then(x=> x.UsuariosModule)},
  {path: '**', redirectTo:'login', pathMatch: 'full'},//cuando no encuentra nada en la ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
