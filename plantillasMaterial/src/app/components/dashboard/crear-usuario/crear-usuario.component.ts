import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../../interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})


export class CrearUsuarioComponent {
  sexo: any[]=["femenio", "masculino"]
  form: FormGroup;

  constructor(private fb: FormBuilder, private _usuarioService: UsuarioService, private router: Router, private _snackBar: MatSnackBar){
    this.form=this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
    })
  }
  agregarUsuario(){
    console.log(this.form)
    const user: Usuario= {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      sexo: this.form.value.sexo
    }



    console.log(user);
    this._usuarioService.addUser(user);
    this.router.navigate(["/dashboard/usuarios"]);


    this._snackBar.open('Usuario agregado con exito',"",{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: "bottom"
    })
  }
}
