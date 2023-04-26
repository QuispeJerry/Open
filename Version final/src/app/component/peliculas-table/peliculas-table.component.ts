import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { PeliculaServService } from '../../services/pelicula-serv.service';
//Tbla
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { Insertar } from '../insertar/insertar.component';
@Component({
  selector: 'app-peliculas-table',
  templateUrl: './peliculas-table.component.html',
  styleUrls: ['./peliculas-table.component.scss'],
})
export class PeliculasTableComponent implements OnInit {
  displayedColumns: any[] = [
    'id',
    'nombre',
    'photo',
    'duracion',
    'genero',
    'accion',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _pelServicio: PeliculaServService
  ) {}

  ngOnInit(): void {
    this.getListaPeliculas();
  }

  elim_edit_form() {
    const dialogRef = this._dialog.open(Insertar);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getListaPeliculas();
        }
      },
    });
  }

  getListaPeliculas() {
    this._pelServicio.get_listaPeliculas().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  eliminarPelicula(id: number) {
    this._pelServicio.eliminarPelicula(id).subscribe({
      next: (res) => {
        alert('película eliminado con éxito');
        this.getListaPeliculas();
      },
      error: console.log,
    });
  }

  editarPelicula(data: any) {
    const dialogRef = this._dialog.open(Insertar, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getListaPeliculas();
        }
      },
    });
  }
}
