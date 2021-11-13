import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
        
  }

  buscarHeroe(termino: string){    
    //1. se debe redireccionar al componente buscar enviando por url el termino 
    this.router.navigate(['/buscador',termino])
    //console.log(termino);
  }

}
