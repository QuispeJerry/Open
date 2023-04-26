import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent {
  form: FormGroup;//formulario

  loading=false

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router){
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
  })
  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    if( usuario== "jerry" && password=="jerry"){
      //redireccionar
      this.fakeLoading()
    }
    else{
      this.error()
      this.form.reset()
    }
  }

  error(){
    this._snackBar.open('Usuario o contraseña ingresado son incorrectos',"",{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: "bottom"
    })
  }

  fakeLoading(){
    this.loading= true
    setTimeout(() => {
      //redireccionar
      this.router.navigate(['dashboard']);
    }, 1500);
  }
}
