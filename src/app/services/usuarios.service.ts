import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  usuario$ : Subject<Usuario>;
  usuario: Usuario={
    nombre:'',
    apellido:''
  };

  constructor() { 
    this.usuario$=new  Subject();
  }

  getUsuario():Observable< Usuario> {
    return this.usuario$.asObservable();
  }

  login(usuario:Usuario){
    this.usuario=usuario;
    this.usuario$.next(this.usuario);
  } 
}
