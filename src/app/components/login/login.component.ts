import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {




  usuario: Usuario={
    nombre:'',
    apellido:'',
  };

  constructor(private _usuarioServices:UsuariosService) { }

  ngOnInit(): void {      
      this._usuarioServices.getUsuario().subscribe(usuario=>{
          this.usuario=usuario;
      })
  }

  login(){    
    this._usuarioServices.login(this.usuario);
  }

  guardar(form: NgForm) {
    if (form.valid) {     
      this.usuario.nombre=form.value.nombre;
      this.usuario.apellido=form.value.apellido;
      
      this._usuarioServices.login(this.usuario);
      //console.log(this.usuario);

      //sessionStorage.setItem('form', JSON.stringify(form.value));      
    }
  }

}
