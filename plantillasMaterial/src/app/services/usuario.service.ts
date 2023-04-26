import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listaUsuarios: Usuario[] = [
    {usuario: "Jerry", nombre: 'JerryQ', apellido: "QuispeG", sexo: 'M'},
    {usuario: "aaa", nombre: 'aa', apellido: "aa", sexo: 'M'},
    {usuario: "bb", nombre: 'bb', apellido: "zzz", sexo: 'M'},
    {usuario: "Jerry", nombre: 'JerryQ', apellido: "QuispeG", sexo: 'M'},
    {usuario: "aaa", nombre: 'aa', apellido: "aa", sexo: 'M'},
    {usuario: "bb", nombre: 'bb', apellido: "zzz", sexo: 'M'},
    {usuario: "Jerry", nombre: 'JerryQ', apellido: "QuispeG", sexo: 'M'},
    {usuario: "aaa", nombre: 'aa', apellido: "aa", sexo: 'M'},
    {usuario: "bb", nombre: 'bb', apellido: "zzz", sexo: 'M'},
    {usuario: "Jerry", nombre: 'JerryQ', apellido: "QuispeG", sexo: 'M'},
    {usuario: "aaa", nombre: 'aa', apellido: "aa", sexo: 'M'},
    {usuario: "bb", nombre: 'bb', apellido: "zzz", sexo: 'M'},
    {usuario: "Jerry", nombre: 'JerryQ', apellido: "QuispeG", sexo: 'M'},
    {usuario: "aaa", nombre: 'aa', apellido: "aa", sexo: 'M'},
    {usuario: "bb", nombre: 'bb', apellido: "zzz", sexo: 'M'},
    {usuario: "Jerry", nombre: 'JerryQ', apellido: "QuispeG", sexo: 'M'},
    {usuario: "aaa", nombre: 'aa', apellido: "aa", sexo: 'M'},
    {usuario: "bb", nombre: 'bb', apellido: "zzz", sexo: 'M'},
    {usuario: "Jerry", nombre: 'JerryQ', apellido: "QuispeG", sexo: 'M'},
    {usuario: "aaa", nombre: 'aa', apellido: "aa", sexo: 'M'},
    {usuario: "bb", nombre: 'bb', apellido: "zzz", sexo: 'M'},
  ]

  constructor() { }

  getUsuario(){
    return this.listaUsuarios.slice();//devuelve una copia del listado de usuarios
  }

  eraseUser(i: number){
    this.listaUsuarios.splice(i,1);
  }

  addUser(user: Usuario){
    this.listaUsuarios.unshift(user);//al inicio
    //this.listaUsuarios.push(user);//al final
  }
}
