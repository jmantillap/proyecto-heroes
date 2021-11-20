import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario={
    nombre:'Javier',
    apellido:'Mantilla',
  };

  constructor(private _usuarioServices:UsuariosService) { }

  ngOnInit(): void {      
      this._usuarioServices.getUsuario().subscribe(usuario=>{
          this.usuario=usuario;
      })
  }

  login(){    
    this._usuarioServices.addUsuario(this.usuario);
  }

}
