import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PeliculaServService } from 'src/app/services/pelicula-serv.service';

@Component({
  selector: 'app-pelicula-c',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.scss'],
})
export class Insertar implements OnInit {
  peliculas: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _peliculasSer: PeliculaServService,
    private _dialogo: MatDialogRef<Insertar>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.peliculas = this._fb.group({
      nombre: '',
      photo: '',
      duracion: '',
      genero: '',
    });
  }

  ngOnInit(): void {
    this.peliculas.patchValue(this.data);
  }

  agregarFormulario() {
    if (this.peliculas.valid) {
      if (this.data) {
        this._peliculasSer
          .ActualizarPelicula(this.data.id, this.peliculas.value)
          .subscribe({
            next: (val: any) => {
              alert('Se actualizó  correctamente');

              this._dialogo.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._peliculasSer.agregarPelicula(this.peliculas.value).subscribe({
          next: (val: any) => {
            alert('Se insertó correctamente');

            this._dialogo.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
