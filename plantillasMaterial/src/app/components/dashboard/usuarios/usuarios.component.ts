import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { __setFunctionName } from 'tslib';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  
  listUsuarios: Usuario[]=[]

  
  

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource!: MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private _usuarioService: UsuarioService, private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario(){
    this.listUsuarios= this._usuarioService.getUsuario();
    this.dataSource= new MatTableDataSource(this.listUsuarios);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  eliminarUsuario(i: number){
    this._usuarioService.eraseUser(i);
    this.cargarUsuario();

    this._snackBar.open('Usuario eliminano con exito',"",{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: "bottom"
    })
  }

}
