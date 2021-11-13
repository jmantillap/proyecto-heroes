import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroe.interface';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroesBusqueda:Heroe[]=[];
  termino:string='';
  constructor(private _heroesServices:HeroesService,private activatedRoute: ActivatedRoute) { }
 
  ngOnInit(): void {
    //traer de la url el termino que se da buscar y pasarselo como parametro 
    //a la funcion buscar heroes.
    //Asignan lo que retorne la funcion buscar heroes a una variable 
      this.activatedRoute.params.subscribe(params=>{
      this.termino=params["termino"];
      //console.log('temino',this.termino);
      this.heroesBusqueda=this._heroesServices.getHeroesTermino(params["termino"]);
      //console.log('Arreglo',this.heroesBusqueda);
    })
  }
 

}
