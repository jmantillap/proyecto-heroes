import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario: Usuario={
      nombre:'',
      apellido:''
  };

  //@Input() usuario:Usuario={};

  constructor(private router:Router,private _usuarioServices:UsuariosService) { }

  ngOnInit(): void {        
        this._usuarioServices.getUsuario().subscribe(usuario=>{
            this.usuario=usuario;
        })
  }

  buscarHeroe(termino: string){    
    //1. se debe redireccionar al componente buscar enviando por url el termino 
    this.router.navigate(['/buscador',termino])
    //console.log(termino);
  }

  logout(){    
    //this._usuarioServices.usuario$.unsubscribe();
    this.usuario={nombre:'',apellido:''  };
    this.router.navigate(['/home']);
  }

}
